import React from 'react';
import AnimatedLink from './AnimatedLink';
import { InstagramIcon, FacebookIcon, LinkedInIcon } from './icons';
import { useContent } from '../contexts/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();
  const { tagline } = content.footer;
  const { socials } = content.contact.info;

  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="glass-panel text-gray-600 dark:text-gray-300">
        <div className="px-6 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-text-light dark:text-white">Yukihana Architecture Studio</h3>
              <p className="text-gray-500 dark:text-brand-gray">{tagline}</p>
            </div>
            
            {/* Center: Quick Navigation */}
            <div>
              <h4 className="font-semibold text-brand-text-light dark:text-white uppercase tracking-wider mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li><AnimatedLink to="/" className="hover:text-brand-yellow transition-colors">Home</AnimatedLink></li>
                <li><AnimatedLink to="/about" className="hover:text-brand-yellow transition-colors">Tentang Kami</AnimatedLink></li>
                <li><AnimatedLink to="/services" className="hover:text-brand-yellow transition-colors">Layanan</AnimatedLink></li>
                <li><AnimatedLink to="/portofolio" className="hover:text-brand-yellow transition-colors">Portofolio</AnimatedLink></li>
                <li><AnimatedLink to="/biaya" className="hover:text-brand-yellow transition-colors">Biaya</AnimatedLink></li>
                <li><AnimatedLink to="/blog" className="hover:text-brand-yellow transition-colors">Blog</AnimatedLink></li>
                <li><AnimatedLink to="/produk" className="hover:text-brand-yellow transition-colors">Produk</AnimatedLink></li>
                <li><AnimatedLink to="/contact" className="hover:text-brand-yellow transition-colors">Kontak</AnimatedLink></li>
              </ul>
            </div>
            
            {/* Right: Social Media */}
            <div>
              <h4 className="font-semibold text-brand-text-light dark:text-white uppercase tracking-wider mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors"><InstagramIcon className="w-6 h-6" /></a>
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors"><FacebookIcon className="w-6 h-6" /></a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="bg-black/5 dark:bg-black/20 py-4 rounded-b-2xl">
          <div className="container mx-auto px-6 text-center text-sm text-gray-500 dark:text-brand-gray">
            © {new Date().getFullYear()} Yukihana Architecture Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;