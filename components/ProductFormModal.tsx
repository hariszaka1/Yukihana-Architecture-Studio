import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import Button from './Button';
import { CloseIcon } from './icons';
import ImageInput from './ImageInput';

interface ProductFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (product: Product | Omit<Product, 'id'>) => void;
    productToEdit?: Product | null;
}

const initialFormState: Omit<Product, 'id'> = {
    name: '',
    category: '',
    price: 0,
    description: '',
    image: '',
};

const ProductFormModal: React.FC<ProductFormModalProps> = ({ isOpen, onClose, onSave, productToEdit }) => {
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (productToEdit) {
            setFormData(productToEdit);
        } else {
            setFormData(initialFormState);
        }
    }, [productToEdit, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) || 0 : value }));
    };

    const handleImageChange = (newValue: string) => {
        setFormData(prev => ({ ...prev, image: newValue }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };
    
    if (!isOpen) return null;

    const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";
    const labelStyles = "block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2";

    return (
        <div 
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4"
            role="dialog"
            aria-modal="true"
        >
            <div className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative">
                <div className="p-6 md:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white">{productToEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
                        <button onClick={onClose} className="text-brand-text-light dark:text-white hover:text-brand-yellow p-1" aria-label="Tutup modal">
                            <CloseIcon className="w-7 h-7" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className={labelStyles}>Nama Produk</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputStyles} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div>
                                <label htmlFor="category" className={labelStyles}>Kategori</label>
                                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required className={inputStyles} />
                            </div>
                             <div>
                                <label htmlFor="price" className={labelStyles}>Harga (Rp)</label>
                                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required className={inputStyles} />
                            </div>
                        </div>
                        <div>
                            <ImageInput
                                label="Gambar Produk"
                                value={formData.image}
                                onChange={handleImageChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className={labelStyles}>Deskripsi</label>
                            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={4} className={inputStyles}></textarea>
                        </div>

                        <div className="pt-4 flex justify-end gap-4">
                            <Button type="button" onClick={onClose} className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">Batal</Button>
                            <Button type="submit">{productToEdit ? 'Simpan Perubahan' : 'Tambah Produk'}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductFormModal;