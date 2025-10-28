import React, { useState, useMemo, useRef } from 'react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useAssets } from '../contexts/AssetContext';
import { CloseIcon } from '../components/icons';

const AssetManagerPage: React.FC = () => {
    const { assets, addAsset, deleteAsset, collectAllImageUrls } = useAssets();
    const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const inUseAssets = useMemo(() => {
        return new Set(collectAllImageUrls());
    }, [collectAllImageUrls]);

    const isAssetInUse = (url: string): boolean => {
        return inUseAssets.has(url);
    };
    
    const handleCopy = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => setCopiedUrl(null), 2000);
    };

    const handleDelete = (url: string) => {
        if (isAssetInUse(url)) {
            alert('Aset ini sedang digunakan di salah satu halaman dan tidak dapat dihapus. Harap hapus penggunaannya terlebih dahulu.');
            return;
        }
        if (window.confirm('Apakah Anda yakin ingin menghapus aset ini secara permanen? Tindakan ini tidak dapat diurungkan.')) {
            deleteAsset(url);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImageSrc = reader.result as string;
                addAsset(newImageSrc);
            };
            reader.readAsDataURL(file);
        }
        // Reset file input value to allow uploading the same file again
        e.target.value = '';
    };

    return (
        <div>
            <PageBanner title="Manajemen Aset Gambar" />

            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <section className="glass-panel p-6 sm:p-8 md:p-12">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
                        <SectionTitle title="Pustaka Aset" subtitle={`Total ${assets.length} gambar`} className="!mb-0 text-left" />
                        <div>
                             <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                className="hidden"
                            />
                            <Button onClick={handleUploadClick}>Unggah Gambar Baru</Button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {assets.map((assetUrl) => {
                            const isInUse = isAssetInUse(assetUrl);
                            return (
                                <div key={assetUrl} className="group relative glass-panel p-2 rounded-lg flex flex-col">
                                    <div className="relative aspect-square w-full">
                                        <img src={assetUrl} alt="Asset" className="w-full h-full object-cover rounded-md" loading="lazy" />
                                        <div className={`absolute top-1 right-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${isInUse ? 'bg-green-500/80 text-white' : 'bg-yellow-500/80 text-black'}`}>
                                            {isInUse ? 'Aktif' : 'Tidak Dipakai'}
                                        </div>
                                    </div>
                                    <div className="text-xs break-all mt-2 p-1 text-gray-500 dark:text-brand-gray">
                                        {assetUrl.startsWith('data:image') ? `Gambar Base64 (${(assetUrl.length / 1024).toFixed(1)} KB)` : assetUrl.split('/').pop()}
                                    </div>
                                    <div className="mt-auto pt-2 flex justify-between gap-1">
                                        <button
                                            onClick={() => handleCopy(assetUrl)}
                                            className="text-xs w-full text-center px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                                        >
                                            {copiedUrl === assetUrl ? 'Tersalin!' : 'Salin URL'}
                                        </button>
                                         <button
                                            onClick={() => handleDelete(assetUrl)}
                                            disabled={isInUse}
                                            className="p-1 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 disabled:bg-gray-500/10 disabled:text-gray-500/50 disabled:cursor-not-allowed transition-colors"
                                            aria-label="Hapus Aset"
                                        >
                                            <CloseIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AssetManagerPage;