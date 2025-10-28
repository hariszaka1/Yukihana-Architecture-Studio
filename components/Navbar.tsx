
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogoIcon, MenuIcon, CloseIcon, CartIcon } from './icons';
import { useCart } from '../contexts/CartContext';
import ThemeToggleButton from './ThemeToggleButton';
import AnimatedLink from './AnimatedLink';
import AnimatedNavLink from './AnimatedNavLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const { cartCount } = useCart();
  const { transitionTo } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    transitionTo('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Portofolio', path: '/portofolio' },
    { name: 'Biaya', path: '/biaya' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontak', path: '/contact' },
    { name: 'Produk', path: '/produk'},
    { name: 'AI Generator', path: '/ai-generator'},
  ];
  
  const navLinkClasses = 'text-brand-text-light dark:text-white uppercase tracking-wider font-medium transition-colors hover:text-brand-yellow nav-link-underline py-2';
  const activeNavLinkClasses = 'text-brand-yellow after:scale-x-100 after:origin-bottom-left';

  const MobileNavLinks: React.FC = () => (
    <nav className="pt-16 flex flex-col items-center space-y-5">
      {navLinks.map((link, index) => (
        <AnimatedNavLink
          key={link.name}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={({ isActive }) => `animate-fade-in-up text-lg ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
        >
          {link.name}
        </AnimatedNavLink>
      ))}
      <div className="w-2/3 border-t border-black/10 dark:border-white/20 my-3 animate-fade-in-up" style={{ animationDelay: `${navLinks.length * 100}ms` }}></div>
      {currentUser ? (
          <>
            {currentUser.username === 'admin' ? (
                <AnimatedNavLink
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `animate-fade-in-up text-lg ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
                  style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
                >
                  Dashboard
                </AnimatedNavLink>
            ) : (
                <AnimatedNavLink
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `animate-fade-in-up text-lg ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
                  style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
                >
                  Profil
                </AnimatedNavLink>
            )}
            <button
              onClick={handleLogout}
              className={`animate-fade-in-up text-lg ${navLinkClasses} uppercase w-full`}
              style={{ animationDelay: `${(navLinks.length + 2) * 100}ms` }}
            >
              Logout
            </button>
          </>
      ) : (
        <>
          <AnimatedNavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `animate-fade-in-up text-lg ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
            style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
          >
            Login
          </AnimatedNavLink>
          <AnimatedLink
            to="/register"
            onClick={() => setIsOpen(false)}
            className="animate-fade-in-up glass-button w-2/3 mt-3"
            style={{ animationDelay: `${(navLinks.length + 2) * 100}ms` }}
          >
            Daftar
          </AnimatedLink>
        </>
      )}
    </nav>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-brand-light/80 dark:bg-brand-dark/50 backdrop-blur-lg shadow-2xl' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <AnimatedLink to="/" className="text-brand-dark dark:text-white" aria-label="Beranda Yukihana Architecture Studio">
              <LogoIcon className="h-10 w-auto"/>
            </AnimatedLink>
            
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <AnimatedNavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `text-sm ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
                >
                  {link.name}
                </AnimatedNavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
               <ThemeToggleButton />
               <AnimatedLink to="/keranjang" className="relative text-brand-dark dark:text-white hover:text-brand-yellow transition-colors p-2">
                 <CartIcon className="w-6 h-6" />
                 {cartCount > 0 && (
                   <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                     {cartCount}
                   </span>
                 )}
               </AnimatedLink>
              {currentUser ? (
                <>
                  {currentUser.username === 'admin' ? (
                     <AnimatedNavLink to="/admin" className={({ isActive }) => `text-sm ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Dashboard</AnimatedNavLink>
                  ) : (
                     <AnimatedNavLink to="/profile" className={({ isActive }) => `text-sm ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Profil</AnimatedNavLink>
                  )}
                  <button onClick={handleLogout} className={`text-sm ${navLinkClasses} uppercase`}>Logout</button>
                </>
              ) : (
                <>
                  <AnimatedNavLink to="/login" className={({ isActive }) => `text-sm ${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Login</AnimatedNavLink>
                  <AnimatedLink to="/register" className="bg-brand-yellow text-brand-dark font-bold text-sm px-5 py-2 rounded-md transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-brand-yellow/30">
                    Daftar
                  </AnimatedLink>
                </>
              )}
            </div>

            <div className="lg:hidden flex items-center gap-x-2">
               <ThemeToggleButton />
               <AnimatedLink to="/keranjang" className="relative text-brand-dark dark:text-white hover:text-brand-yellow transition-colors p-2">
                 <CartIcon className="w-6 h-6" />
                 {cartCount > 0 && (
                   <span className="absolute top-0 right-0 bg-brand-yellow text-brand-dark text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                     {cartCount}
                   </span>
                 )}
               </AnimatedLink>
              <button onClick={() => setIsOpen(true)} className="text-brand-dark dark:text-white focus:outline-none" aria-label="Buka menu">
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed top-0 right-0 h-full w-[85%] sm:w-[60%] md:w-[45%] bg-brand-light/95 dark:bg-brand-accent-dark/90 backdrop-blur-xl shadow-2xl animate-slide-in-right">
            <div className="flex justify-end p-6">
                <button onClick={() => setIsOpen(false)} className="text-brand-dark dark:text-white focus:outline-none" aria-label="Tutup menu">
                    <CloseIcon className="w-8 h-8"/>
                </button>
            </div>
            <MobileNavLinks />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
