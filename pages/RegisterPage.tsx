import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';
import AnimatedLink from '../components/AnimatedLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { register } = useAuth();
  const { transitionTo } = usePageTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await register(username, email, fullName, password);
      setSuccess('Pendaftaran berhasil! Anda akan dialihkan ke halaman login.');
      setTimeout(() => transitionTo('/login'), 2000);
    } catch (err: any) {
      setError(err.message || 'Gagal mendaftar. Silakan coba lagi.');
    }
  };
  
  const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";

  return (
    <div>
      <PageBanner title="Daftar Akun Baru" />
      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto glass-panel p-6 sm:p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Nama Pengguna</label>
              <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required className={inputStyles} />
            </div>
             <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Nama Lengkap</label>
              <input type="text" id="fullName" value={fullName} onChange={e => setFullName(e.target.value)} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className={inputStyles} />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Kata Sandi</label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required className={inputStyles} />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}
            <Button type="submit" className="w-full">Daftar</Button>
          </form>
           <p className="text-center mt-6 text-gray-600 dark:text-brand-gray">
            Sudah punya akun? <AnimatedLink to="/login" className="font-semibold text-brand-yellow hover:underline">Login di sini</AnimatedLink>
          </p>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;