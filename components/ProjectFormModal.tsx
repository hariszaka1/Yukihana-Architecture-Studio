import React, { useState, useEffect } from 'react';
import { produce } from 'https://esm.sh/immer@10.1.1';
import { Project, ProjectCategory } from '../types';
import Button from './Button';
import { CloseIcon } from './icons';
import ImageInput from './ImageInput';

interface ProjectFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (project: Project | Omit<Project, 'id'>) => void;
    projectToEdit?: Project | null;
}

const allCategories: ProjectCategory[] = ['Arsitektur', 'Interior', 'Renovasi', '360 Virtual Reality', '3D Animasi'];
const initialFormState: Omit<Project, 'id' | 'gallery'> = {
    title: '',
    category: 'Arsitektur',
    year: new Date().getFullYear(),
    location: '',
    mainImage: '',
    description: '',
};

const ProjectFormModal: React.FC<ProjectFormModalProps> = ({ isOpen, onClose, onSave, projectToEdit }) => {
    const [formData, setFormData] = useState(initialFormState);
    const [galleryItems, setGalleryItems] = useState<string[]>([]);

    useEffect(() => {
        if (projectToEdit) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { gallery, ...rest } = projectToEdit;
            setFormData(rest);
            setGalleryItems(gallery || []);
        } else {
            setFormData(initialFormState);
            setGalleryItems([]);
        }
    }, [projectToEdit, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'year' ? parseInt(value) : value }));
    };

    const handleMainImageChange = (newValue: string) => {
        setFormData(prev => ({ ...prev, mainImage: newValue }));
    };

    const handleGalleryItemChange = (index: number, newValue: string) => {
        setGalleryItems(produce(draft => {
            draft[index] = newValue;
        }));
    };
    
    const addGalleryItem = () => {
        setGalleryItems(produce(draft => {
            draft.push('');
        }));
    };

    const removeGalleryItem = (index: number) => {
        setGalleryItems(produce(draft => {
            draft.splice(index, 1);
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const gallery = galleryItems.filter(url => url.trim() !== '');
        const projectData = { ...formData, gallery };

        if (projectToEdit) {
            onSave({ ...projectData, id: projectToEdit.id });
        } else {
            onSave(projectData);
        }
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
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white">{projectToEdit ? 'Edit Proyek' : 'Tambah Proyek Baru'}</h2>
                        <button onClick={onClose} className="text-brand-text-light dark:text-white hover:text-brand-yellow p-1" aria-label="Tutup modal">
                            <CloseIcon className="w-7 h-7" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className={labelStyles}>Judul Proyek</label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className={inputStyles} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div>
                                <label htmlFor="category" className={labelStyles}>Kategori</label>
                                <select id="category" name="category" value={formData.category} onChange={handleChange} required className={`${inputStyles} appearance-none`}>
                                    {allCategories.map(cat => <option className="bg-white text-brand-text-light dark:bg-gray-800 dark:text-brand-gray" key={cat} value={cat}>{cat}</option>)}
                                </select>
                            </div>
                             <div>
                                <label htmlFor="year" className={labelStyles}>Tahun</label>
                                <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required className={inputStyles} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location" className={labelStyles}>Lokasi</label>
                            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required className={inputStyles} />
                        </div>
                        <div>
                            <ImageInput
                                label="Gambar Utama"
                                value={formData.mainImage}
                                onChange={handleMainImageChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className={labelStyles}>Deskripsi</label>
                            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={4} className={inputStyles}></textarea>
                        </div>
                         <div>
                            <label className={labelStyles}>Galeri</label>
                            <div className="space-y-4 p-4 glass-panel rounded-md">
                                {galleryItems.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <ImageInput
                                            label={`Gambar Galeri ${index + 1}`}
                                            value={item}
                                            onChange={newValue => handleGalleryItemChange(index, newValue)}
                                            className="flex-grow"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeGalleryItem(index)}
                                            className="mt-7 p-2 rounded-full text-red-400 hover:bg-red-400/20 transition-colors"
                                            aria-label={`Hapus Gambar Galeri ${index + 1}`}
                                        >
                                            <CloseIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                                <Button type="button" onClick={addGalleryItem} className="w-full text-sm !py-2">Tambah Gambar Galeri</Button>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end gap-4">
                            <Button type="button" onClick={onClose} className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">Batal</Button>
                            <Button type="submit">{projectToEdit ? 'Simpan Perubahan' : 'Tambah Proyek'}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProjectFormModal;