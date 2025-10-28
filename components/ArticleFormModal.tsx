import React, { useState, useEffect } from 'react';
import { produce } from 'https://esm.sh/immer@10.1.1';
import { Article, ArticleContentBlock } from '../types';
import Button from './Button';
import { CloseIcon, ArrowUpIcon } from './icons';
import ImageInput from './ImageInput';
import { useBlog } from '../contexts/BlogContext';

interface ArticleFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (article: Article | Omit<Article, 'id'>) => void;
    articleToEdit?: Article | null;
}

const initialFormState: Omit<Article, 'id' | 'content'> = {
    title: '',
    authorId: '',
    date: new Date().toISOString(),
    category: '',
    mainImage: '',
    summary: '',
};

const ArticleFormModal: React.FC<ArticleFormModalProps> = ({ isOpen, onClose, onSave, articleToEdit }) => {
    const { authors } = useBlog();
    const [formData, setFormData] = useState(initialFormState);
    const [contentBlocks, setContentBlocks] = useState<ArticleContentBlock[]>([]);

    useEffect(() => {
        if (isOpen) {
            if (articleToEdit) {
                const { content, ...rest } = articleToEdit;
                setFormData(rest);
                setContentBlocks(content || []);
            } else {
                setFormData({
                    ...initialFormState,
                    authorId: authors.length > 0 ? authors[0].id : ''
                });
                setContentBlocks([]);
            }
        }
    }, [articleToEdit, isOpen, authors]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (index: number, field: string, value: any) => {
        setContentBlocks(
            produce(draft => {
                const block = draft[index] as any;
                block[field] = value;
            })
        );
    };

    const addContentBlock = (type: 'heading' | 'paragraph' | 'image') => {
        let newBlock: ArticleContentBlock;
        if (type === 'heading') {
            newBlock = { type: 'heading', level: 2, text: '' };
        } else if (type === 'paragraph') {
            newBlock = { type: 'paragraph', text: '' };
        } else { // image
            newBlock = { type: 'image', src: '', caption: '' };
        }
        setContentBlocks(produce(draft => {
            draft.push(newBlock);
        }));
    };

    const removeContentBlock = (index: number) => {
        setContentBlocks(produce(draft => {
            draft.splice(index, 1);
        }));
    };

    const moveContentBlock = (index: number, direction: 'up' | 'down') => {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= contentBlocks.length) return;

        setContentBlocks(produce(draft => {
            const [movedItem] = draft.splice(index, 1);
            draft.splice(newIndex, 0, movedItem);
        }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const articleData = { ...formData, content: contentBlocks };
        if (articleToEdit) {
            onSave({ ...articleData, id: articleToEdit.id });
        } else {
            onSave(articleData);
        }
    };

    if (!isOpen) return null;

    const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";
    const labelStyles = "block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2";

    const renderContentBlock = (block: ArticleContentBlock, index: number) => {
        const blockLabel = block.type.charAt(0).toUpperCase() + block.type.slice(1);

        return (
            <div key={index} className="glass-panel p-4 rounded-lg relative">
                 <div className="absolute top-2 right-2 flex gap-1">
                    <button type="button" onClick={() => moveContentBlock(index, 'up')} disabled={index === 0} className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"><ArrowUpIcon className="w-4 h-4" /></button>
                    <button type="button" onClick={() => moveContentBlock(index, 'down')} disabled={index === contentBlocks.length - 1} className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"><ArrowUpIcon className="w-4 h-4 transform rotate-180" /></button>
                    <button type="button" onClick={() => removeContentBlock(index)} className="p-1 rounded-full text-red-400 hover:bg-red-400/20"><CloseIcon className="w-4 h-4" /></button>
                </div>
                <label className={`${labelStyles} font-bold`}>{`${index + 1}. ${blockLabel}`}</label>
                {block.type === 'heading' && (
                    <div className="flex gap-4">
                        <select value={block.level} onChange={(e) => handleContentChange(index, 'level', parseInt(e.target.value))} className={`${inputStyles} w-24 appearance-none`}>
                            <option value={2}>H2</option>
                            <option value={3}>H3</option>
                            <option value={4}>H4</option>
                        </select>
                        <input type="text" value={block.text} onChange={(e) => handleContentChange(index, 'text', e.target.value)} placeholder="Teks Heading" className={`${inputStyles} flex-grow`} />
                    </div>
                )}
                {block.type === 'paragraph' && (
                    <textarea value={block.text} onChange={(e) => handleContentChange(index, 'text', e.target.value)} placeholder="Tulis paragraf di sini..." rows={4} className={inputStyles}></textarea>
                )}
                {block.type === 'image' && (
                     <div className="space-y-4">
                        <ImageInput label="" value={block.src} onChange={newValue => handleContentChange(index, 'src', newValue)} />
                        <input type="text" value={block.caption} onChange={(e) => handleContentChange(index, 'caption', e.target.value)} placeholder="Teks Keterangan (Caption)" className={inputStyles} />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4" role="dialog" aria-modal="true">
            <div className="glass-panel w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl shadow-2xl relative">
                <div className="p-6 md:p-8 flex-shrink-0 border-b border-black/10 dark:border-white/20">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white">{articleToEdit ? 'Edit Artikel' : 'Tambah Artikel Baru'}</h2>
                        <button onClick={onClose} className="text-brand-text-light dark:text-white hover:text-brand-yellow p-1" aria-label="Tutup modal"><CloseIcon className="w-7 h-7" /></button>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto">
                    <div className="p-6 md:p-8 space-y-4">
                        <div>
                            <label htmlFor="title" className={labelStyles}>Judul Artikel</label>
                            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className={inputStyles} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="authorId" className={labelStyles}>Penulis</label>
                                <select id="authorId" name="authorId" value={formData.authorId} onChange={handleChange} required className={`${inputStyles} appearance-none`}>
                                    {authors.map(author => <option className="bg-white text-brand-text-light dark:bg-gray-800 dark:text-brand-gray" key={author.id} value={author.id}>{author.name}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="category" className={labelStyles}>Kategori</label>
                                <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required className={inputStyles} />
                            </div>
                        </div>
                        <div>
                            <ImageInput label="Gambar Utama" value={formData.mainImage} onChange={newValue => setFormData(p => ({...p, mainImage: newValue}))} />
                        </div>
                        <div>
                            <label htmlFor="summary" className={labelStyles}>Ringkasan</label>
                            <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} required rows={3} className={inputStyles}></textarea>
                        </div>

                        <div>
                            <label className={labelStyles}>Konten Artikel</label>
                            <div className="space-y-4 p-4 glass-panel rounded-md">
                                {contentBlocks.map(renderContentBlock)}
                                <div className="flex justify-center gap-4 pt-4 border-t border-black/10 dark:border-white/20">
                                    <Button type="button" onClick={() => addContentBlock('heading')} className="text-sm !py-2">Tambah Heading</Button>
                                    <Button type="button" onClick={() => addContentBlock('paragraph')} className="text-sm !py-2">Tambah Paragraf</Button>
                                    <Button type="button" onClick={() => addContentBlock('image')} className="text-sm !py-2">Tambah Gambar</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="p-6 md:p-8 flex-shrink-0 flex justify-end gap-4 border-t border-black/10 dark:border-white/20">
                        <Button type="button" onClick={onClose} className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">Batal</Button>
                        <Button type="submit">{articleToEdit ? 'Simpan Perubahan' : 'Tambah Artikel'}</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArticleFormModal;