import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const UserProfilePage: React.FC = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFormData({
        fullName: currentUser.fullName || '',
        email: currentUser.email || '',
        phone: currentUser.phone || '',
        address: currentUser.address || '',
      });
    }
  }, [currentUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    if (!currentUser) {
        setError("Anda harus login untuk memperbarui profil.");
        return;
    }
    try {
      await updateUserProfile(formData);
      setMessage('Profil berhasil diperbarui!');
    } catch (err: any) {
      setError(err.message || 'Gagal memperbarui profil. Silakan coba lagi.');
    }
  };
  
  const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";
  const labelStyles = "block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2";

  if (!currentUser) {
    return null; // Should be handled by ProtectedRoute
  }

  return (
    <div>
      <PageBanner title="Profil Pengguna" />
      <section className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto glass-panel p-6 sm:p-8 md:p-12">
          <SectionTitle title={`Selamat Datang, ${currentUser.fullName || currentUser.username}!`} subtitle="Akun Saya" />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={labelStyles}>Nama Pengguna (tidak dapat diubah)</label>
              <input type="text" value={currentUser.username} readOnly className={`${inputStyles} bg-black/5 dark:bg-white/5 cursor-not-allowed`} />
            </div>
            <div>
              <label htmlFor="fullName" className={labelStyles}>Nama Lengkap</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className={inputStyles} />
            </div>
             <div>
              <label htmlFor="email" className={labelStyles}>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyles} />
            </div>
             <div>
              <label htmlFor="phone" className={labelStyles}>Nomor Telepon</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputStyles} placeholder="Contoh: 081234567890" />
            </div>
             <div>
              <label htmlFor="address" className={labelStyles}>Alamat</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3} className={inputStyles} placeholder="Masukkan alamat lengkap Anda"></textarea>
            </div>
            {message && <p className="text-green-400 text-sm animate-fade-in-down">{message}</p>}
            {error && <p className="text-red-400 text-sm animate-fade-in-down">{error}</p>}
            <Button type="submit" className="w-full">Simpan Perubahan</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserProfilePage;