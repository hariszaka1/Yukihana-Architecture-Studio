import React, { useState } from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';
import AnimatedLink from '../components/AnimatedLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { transitionTo } = usePageTransition();
  const location = ReactRouterDOM.useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const success = await login(username, password);
      if (success) {
        if (username === 'admin') {
          transitionTo('/admin');
        } else {
            transitionTo(from === '/login' || from === '/register' ? '/profile' : from);
        }
      } else {
        setError('Nama pengguna atau kata sandi salah.');
      }
    } catch (err) {
      setError('Gagal untuk masuk. Silakan coba lagi.');
    }
  };
  
  const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";

  return (
    <div>
      <PageBanner title="Login" />
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto glass-panel p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Nama Pengguna</label>
              <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Kata Sandi</label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required className={inputStyles} />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Login</Button>
          </form>
          <p className="text-center mt-6 text-gray-600 dark:text-brand-gray">
            Belum punya akun? <AnimatedLink to="/register" className="font-semibold text-brand-yellow hover:underline">Daftar di sini</AnimatedLink>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;