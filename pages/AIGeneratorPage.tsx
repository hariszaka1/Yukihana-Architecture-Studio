import React, { useState } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { SparklesIcon, ClipboardCheckIcon } from '../components/icons';

// FIX: Moved FormField outside the AIGeneratorPage component for better practice and to resolve potential scoping issues.
const FormField = ({ id, label, children, labelStyles }: { id: string, label: string, children: React.ReactNode, labelStyles: string }) => (
    <div>
        <label htmlFor={id} className={labelStyles}>{label}</label>
        {children}
    </div>
);

const AIGeneratorPage: React.FC = () => {
    // State for Brief & Moodboard Generator
    const [formData, setFormData] = useState({
        projectType: 'Rumah Tinggal',
        designStyle: 'Minimalis Modern',
        primaryRoom: 'Ruang keluarga',
        colorPalette: 'Netral dengan aksen kayu',
        keyMaterials: 'Kayu oak, beton, dan linen',
        desiredAtmosphere: 'Hangat dan nyaman',
        mustHaveFeatures: ''
    });
    const [isGenerating, setIsLoading] = useState(false);
    const [generatedBrief, setGeneratedBrief] = useState<string | null>(null);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);
    const [generatorError, setGeneratorError] = useState<string | null>(null);
    const [isBriefCopied, setIsBriefCopied] = useState(false);
    
    // State for AI Image Editor
    const [editImage, setEditImage] = useState<File | null>(null);
    const [editImagePreview, setEditImagePreview] = useState<string | null>(null);
    const [editPrompt, setEditPrompt] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedImage, setEditedImage] = useState<string | null>(null);
    const [editError, setEditError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        
        for (const key in formData) {
            if (key !== 'mustHaveFeatures' && !formData[key as keyof typeof formData].trim()) {
                setGeneratorError('Harap isi semua bidang yang wajib diisi.');
                return;
            }
        }

        setIsLoading(true);
        setGeneratorError(null);
        setGeneratedBrief(null);
        setGeneratedImages([]);
        setIsBriefCopied(false);

        try {
            if (!process.env.API_KEY) {
                throw new Error("API key tidak dikonfigurasi.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const briefPrompt = `
                Anda adalah seorang arsitek dan desainer interior ahli. Berdasarkan persyaratan pengguna berikut, buatlah sebuah brief desain profesional yang dapat diserahkan kepada seorang desainer. 
                Format output dengan jelas menggunakan Markdown, dengan bagian-bagian berikut:
                - **Ringkasan Proyek:** Deskripsi singkat tentang proyek.
                - **Tujuan Desain:** Apa yang ingin dicapai oleh klien dengan desain ini.
                - **Gaya & Estetika:** Detail tentang gaya, warna, dan material.
                - **Elemen Kunci & Fitur Wajib:** Fitur spesifik yang harus ada.
                - **Suasana Ruang:** Atmosfer yang diinginkan.

                Persyaratan Pengguna:
                - Jenis Proyek: ${formData.projectType}
                - Gaya Desain: ${formData.designStyle}
                - Ruangan Utama: ${formData.primaryRoom}
                - Palet Warna: ${formData.colorPalette}
                - Material Utama: ${formData.keyMaterials}
                - Suasana yang Diinginkan: ${formData.desiredAtmosphere}
                - Fitur Wajib: ${formData.mustHaveFeatures || 'Tidak ada'}
            `;

            const imagePrompt = `
                Foto interior fotorealistis, sebuah ${formData.primaryRoom} dengan gaya ${formData.designStyle}. 
                Menampilkan ${formData.keyMaterials}. 
                Menggunakan palet warna ${formData.colorPalette}. 
                Menciptakan suasana yang ${formData.desiredAtmosphere}. 
                ${formData.mustHaveFeatures ? `Dengan fitur khusus: ${formData.mustHaveFeatures}.` : ''} 
                Pencahayaan alami yang indah, detail tinggi, kualitas sinematik.
            `;

            const [briefResponse, imagesResponse] = await Promise.all([
                ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: briefPrompt,
                }),
                ai.models.generateImages({
                    model: 'imagen-4.0-generate-001',
                    prompt: imagePrompt,
                    config: {
                        numberOfImages: 4,
                        outputMimeType: 'image/jpeg',
                        aspectRatio: "4:3",
                    },
                })
            ]);

            setGeneratedBrief(briefResponse.text);

            const imageUrls = imagesResponse.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
            setGeneratedImages(imageUrls);

        } catch (err) {
            console.error(err);
            setGeneratorError('Gagal membuat brief & moodboard. Harap periksa input Anda atau coba lagi nanti.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopyBrief = () => {
        if (generatedBrief) {
            navigator.clipboard.writeText(generatedBrief);
            setIsBriefCopied(true);
            setTimeout(() => setIsBriefCopied(false), 2000);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setEditImage(file);
            setEditImagePreview(URL.createObjectURL(file));
            setEditedImage(null);
            setEditError(null);
        }
    };
    
    const blobToBase64 = (blob: Blob): Promise<string> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(blob);
      });
    };

    const handleEditGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editImage || !editPrompt) {
            setEditError('Harap unggah gambar dan berikan prompt editan.');
            return;
        }
        
        setIsEditing(true);
        setEditError(null);
        setEditedImage(null);

        try {
            if (!process.env.API_KEY) throw new Error("API key tidak dikonfigurasi.");
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const imageBase64 = await blobToBase64(editImage);
            const imagePart = { inlineData: { data: imageBase64, mimeType: editImage.type } };
            const textPart = { text: editPrompt };
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: { parts: [imagePart, textPart] },
                config: {
                    responseModalities: [Modality.IMAGE],
                },
            });
            
            const firstPart = response.candidates?.[0]?.content?.parts?.[0];
            if (firstPart && firstPart.inlineData) {
                const base64Image = firstPart.inlineData.data;
                setEditedImage(`data:${firstPart.inlineData.mimeType};base64,${base64Image}`);
            } else {
                throw new Error('Tidak ada gambar yang dihasilkan. Model mungkin menolak permintaan tersebut.');
            }

        } catch (err: any) {
            console.error(err);
            setEditError(err.message || 'Gagal mengedit gambar. Silakan coba lagi.');
        } finally {
            setIsEditing(false);
        }
    };

    const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";
    const labelStyles = "block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2";
    
    return (
        <div>
            <PageBanner title="AI Creative Tools" />

            <div className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <section className="glass-panel p-6 sm:p-8 md:p-12">
                    <SectionTitle title="Ciptakan Brief Desain Profesional" subtitle="Generator Moodboard & Brief Proyek AI" />
                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleGenerate} className="space-y-6">
                            <p className="text-center text-gray-600 dark:text-brand-gray mb-8">Isi detail di bawah ini untuk menghasilkan brief proyek yang komprehensif dan moodboard visual yang dapat Anda berikan kepada desainer kami.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <FormField id="projectType" label="Jenis Proyek" labelStyles={labelStyles}>
                                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputStyles} appearance-none`}>
                                        <option>Rumah Tinggal</option>
                                        <option>Apartemen</option>
                                        <option>Kantor</option>
                                        <option>Kafe/Restoran</option>
                                        <option>Toko Ritel</option>
                                    </select>
                                </FormField>
                                <FormField id="designStyle" label="Gaya Desain" labelStyles={labelStyles}>
                                    <input type="text" id="designStyle" name="designStyle" value={formData.designStyle} onChange={handleChange} className={inputStyles} placeholder="Cth: Industrial, Skandinavia" />
                                </FormField>
                                <FormField id="primaryRoom" label="Ruangan Utama" labelStyles={labelStyles}>
                                    <input type="text" id="primaryRoom" name="primaryRoom" value={formData.primaryRoom} onChange={handleChange} className={inputStyles} placeholder="Cth: Kamar tidur utama" />
                                </FormField>
                                <FormField id="colorPalette" label="Palet Warna" labelStyles={labelStyles}>
                                    <input type="text" id="colorPalette" name="colorPalette" value={formData.colorPalette} onChange={handleChange} className={inputStyles} placeholder="Cth: Monokromatik abu-abu" />
                                </FormField>
                            </div>
                             <FormField id="keyMaterials" label="Material Utama" labelStyles={labelStyles}>
                                <input type="text" id="keyMaterials" name="keyMaterials" value={formData.keyMaterials} onChange={handleChange} className={inputStyles} placeholder="Cth: Marmer putih, kuningan, velvet" />
                            </FormField>
                            <FormField id="desiredAtmosphere" label="Suasana yang Diinginkan" labelStyles={labelStyles}>
                                <input type="text" id="desiredAtmosphere" name="desiredAtmosphere" value={formData.desiredAtmosphere} onChange={handleChange} className={inputStyles} placeholder="Cth: Mewah, elegan, dan dramatis" />
                            </FormField>
                             <FormField id="mustHaveFeatures" label="Fitur Wajib atau Catatan Tambahan (Opsional)" labelStyles={labelStyles}>
                                <textarea
                                    id="mustHaveFeatures"
                                    name="mustHaveFeatures"
                                    value={formData.mustHaveFeatures}
                                    onChange={handleChange}
                                    placeholder="Cth: Dapur dengan island besar, jendela dari lantai ke langit-langit..."
                                    rows={3}
                                    className={inputStyles}
                                />
                            </FormField>

                            <Button type="submit" className="w-full !py-4 flex items-center justify-center gap-x-2" disabled={isGenerating}>
                                {isGenerating ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Membuat Brief & Moodboard...
                                    </>
                                ) : (
                                    <>
                                        <SparklesIcon className="w-5 h-5" />
                                        Generate Brief & Moodboard
                                    </>
                                )}
                            </Button>
                        </form>
                        
                        <div className="mt-12">
                            {generatorError && (
                                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg text-center">
                                    {generatorError}
                                </div>
                            )}

                            {(generatedBrief || generatedImages.length > 0) && (
                                <div className="space-y-12 animate-fade-in">
                                    {generatedBrief && (
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold text-brand-text-light dark:text-white">Brief Proyek</h3>
                                                <Button onClick={handleCopyBrief} className="!px-4 !py-2 text-sm flex items-center gap-2">
                                                    <ClipboardCheckIcon className="w-4 h-4" />
                                                    {isBriefCopied ? 'Tersalin!' : 'Salin Brief'}
                                                </Button>
                                            </div>
                                            <div className="glass-panel p-6 prose prose-lg max-w-none">
                                                <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: generatedBrief.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                            </div>
                                        </div>
                                    )}

                                    {generatedImages.length > 0 && (
                                        <div>
                                            <h3 className="text-xl font-bold text-center mb-4 text-brand-text-light dark:text-white">Moodboard Visual</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {generatedImages.map((src, index) => (
                                                    <div key={index} className="glass-panel p-2">
                                                        <img
                                                            src={src}
                                                            alt={`Generated moodboard image ${index + 1}`}
                                                            className="w-full h-auto rounded-lg shadow-xl"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                
                <section className="glass-panel p-6 sm:p-8 md:p-12">
                    <SectionTitle title="Edit Gambar dengan AI" subtitle="AI Image Editor" />
                     <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleEditGenerate} className="space-y-6">
                            <p className="text-center text-gray-600 dark:text-brand-gray mb-8">Unggah gambar dan berikan instruksi berbasis teks untuk mengeditnya secara ajaib. Coba "tambahkan filter retro" atau "hapus orang di latar belakang".</p>
                            
                            <div>
                                <label htmlFor="imageUpload" className={labelStyles}>1. Unggah Gambar Anda</label>
                                <input id="imageUpload" type="file" onChange={handleImageUpload} accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-yellow/20 file:text-brand-yellow hover:file:bg-brand-yellow/30"/>
                            </div>

                             <div>
                                <label htmlFor="editPrompt" className={labelStyles}>2. Tuliskan Instruksi Editan Anda</label>
                                <input type="text" id="editPrompt" value={editPrompt} onChange={e => setEditPrompt(e.target.value)} className={inputStyles} placeholder="Cth: Ubah warna sofa menjadi biru" />
                            </div>

                            <Button type="submit" className="w-full !py-4 flex items-center justify-center gap-x-2" disabled={isEditing || !editImage}>
                                {isEditing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Mengedit Gambar...
                                    </>
                                ) : (
                                    <>
                                        <SparklesIcon className="w-5 h-5" />
                                        Generate Editan
                                    </>
                                )}
                            </Button>
                        </form>

                         <div className="mt-12">
                            {editError && (
                                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg text-center">
                                    {editError}
                                </div>
                            )}

                            {(editImagePreview || editedImage) && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-fade-in">
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-brand-text-light dark:text-white mb-2">Asli</h3>
                                        {editImagePreview && <img src={editImagePreview} alt="Original" className="w-full h-auto rounded-lg shadow-lg" />}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-brand-text-light dark:text-white mb-2">Hasil Editan</h3>
                                        {isEditing && (
                                            <div className="aspect-square w-full bg-black/5 dark:bg-white/10 rounded-lg flex items-center justify-center">
                                                <SparklesIcon className="w-16 h-16 text-brand-yellow/50 animate-pulse" />
                                            </div>
                                        )}
                                        {editedImage && (
                                            <div>
                                                <img src={editedImage} alt="Edited" className="w-full h-auto rounded-lg shadow-lg" />
                                                <a href={editedImage} download="edited-image.png" className="glass-button inline-block mt-4">
                                                    Unduh Gambar
                                                </a>
                                            </div>
                                        )}
                                        {!isEditing && !editedImage && (
                                            <div className="aspect-square w-full border-2 border-dashed border-black/10 dark:border-white/20 rounded-lg flex items-center justify-center text-gray-500 dark:text-brand-gray">
                                                Hasil editan akan muncul di sini.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AIGeneratorPage;