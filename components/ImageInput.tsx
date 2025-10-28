import React, { useRef } from 'react';
import { useAssets } from '../contexts/AssetContext';

interface ImageInputProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    className?: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ label, value, onChange, className }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { addAsset } = useAssets();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImageSrc = reader.result as string;
                addAsset(newImageSrc); // Add to central asset library
                onChange(newImageSrc);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };

    const inputStyles = "w-full p-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-1 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 text-sm";
    const labelStyles = "block text-sm font-semibold text-gray-500 dark:text-brand-gray mb-1";

    return (
        <div className={className}>
            <label className={labelStyles}>{label}</label>
            <div className="flex flex-col sm:flex-row items-start gap-4">
                {value && (
                    <img 
                        src={value} 
                        alt="Preview" 
                        className="w-24 h-24 object-cover rounded-md border border-black/10 dark:border-white/20"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        onLoad={(e) => { (e.target as HTMLImageElement).style.display = 'block'; }}
                    />
                )}
                <div className="flex-grow w-full space-y-2">
                    <input
                        type="text"
                        value={value}
                        onChange={handleUrlChange}
                        placeholder="https://... atau pilih file"
                        className={inputStyles}
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                    />
                    <button
                        type="button"
                        onClick={triggerFileSelect}
                        className="w-full text-sm py-2 px-4 rounded-md bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                    >
                        Pilih Gambar dari Komputer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageInput;