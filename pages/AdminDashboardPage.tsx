import React, { useState } from 'react';
import { produce } from 'https://esm.sh/immer@10.1.1';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import { useAuth } from '../contexts/AuthContext';
import { useProjects } from '../contexts/ProjectContext';
import { Project, SiteContent, Product, Message, Article } from '../types';
import Button from '../components/Button';
import ProjectFormModal from '../components/ProjectFormModal';
import { useContent } from '../contexts/ContentContext';
import AccordionItem from '../components/AccordionItem';
import ImageInput from '../components/ImageInput';
import { CloseIcon } from '../components/icons';
import { useProducts } from '../contexts/ProductContext';
import ProductFormModal from '../components/ProductFormModal';
import { useMessages } from '../contexts/MessagesContext';
import MessageDetailModal from '../components/MessageDetailModal';
import { useBlog } from '../contexts/BlogContext';
import ArticleFormModal from '../components/ArticleFormModal';
import { useAssets } from '../contexts/AssetContext';

const AdminDashboardPage: React.FC = () => {
  const { users } = useAuth();
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const { products, addProduct, updateProduct, deleteProduct: deleteProduct } = useProducts();
  const { content, setContent } = useContent();
  const { messages, unreadCount, markAsRead, deleteMessage } = useMessages();
  const { articles, addArticle, updateArticle, deleteArticle } = useBlog();
  const { assets } = useAssets();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState<Article | null>(null);
  
  const [draftContent, setDraftContent] = useState<SiteContent>(content);
  
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const stats = {
      totalUsers: users.length,
      totalProjects: projects.length,
      totalProducts: products.length,
      totalAssets: assets.length,
      contactInquiries: unreadCount,
      totalArticles: articles.length,
  };
  
  const inputStyles = "w-full p-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-1 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 text-sm";
  const textareaStyles = `${inputStyles} min-h-[80px]`;
  const labelStyles = "block text-sm font-semibold text-gray-500 dark:text-brand-gray mb-1 mt-3";

  const handleOpenModal = (project?: Project) => {
      setProjectToEdit(project || null);
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
      setProjectToEdit(null);
  };

  const handleSaveProject = (projectData: Project | Omit<Project, 'id'>) => {
      if ('id' in projectData) {
          updateProject(projectData as Project);
      } else {
          addProject(projectData as Omit<Project, 'id'>);
      }
      handleCloseModal();
  };

  const handleDeleteProject = (projectId: string) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus proyek ini? Tindakan ini tidak dapat diurungkan.')) {
          deleteProject(projectId);
      }
  };

  const handleOpenProductModal = (product?: Product) => {
    setProductToEdit(product || null);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
      setIsProductModalOpen(false);
      setProductToEdit(null);
  };

  const handleSaveProduct = (productData: Product | Omit<Product, 'id'>) => {
      if ('id' in productData) {
          updateProduct(productData as Product);
      } else {
          addProduct(productData as Omit<Product, 'id'>);
      }
      handleCloseProductModal();
  };

  const handleDeleteProduct = (productId: string) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus produk ini? Tindakan ini tidak dapat diurungkan.')) {
          deleteProduct(productId);
      }
  };

  const handleOpenArticleModal = (article?: Article) => {
    setArticleToEdit(article || null);
    setIsArticleModalOpen(true);
  };

  const handleCloseArticleModal = () => {
      setIsArticleModalOpen(false);
      setArticleToEdit(null);
  };

  const handleSaveArticle = (articleData: Article | Omit<Article, 'id'>) => {
      if ('id' in articleData) {
          updateArticle(articleData as Article);
      } else {
          addArticle(articleData as Omit<Article, 'id'>);
      }
      handleCloseArticleModal();
  };

  const handleDeleteArticle = (articleId: string) => {
      if (window.confirm('Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat diurungkan.')) {
          deleteArticle(articleId);
      }
  };
  
  const handleContentChange = (path: (string | number)[], value: any) => {
      setDraftContent(
          produce(draft => {
              let current: any = draft;
              for (let i = 0; i < path.length - 1; i++) {
                  current = current[path[i]];
              }
              current[path[path.length - 1]] = value;
          })
      );
  };

  const handleSaveContent = () => {
      setContent(draftContent);
      alert('Konten berhasil disimpan!');
  };

  const handleOpenMessageModal = (message: Message) => {
    setSelectedMessage(message);
    setIsMessageModalOpen(true);
    markAsRead(message.id);
  };

  const handleCloseMessageModal = () => {
    setIsMessageModalOpen(false);
    setSelectedMessage(null);
  };
  
  const handleDeleteMessage = (messageId: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pesan ini?')) {
      deleteMessage(messageId);
      handleCloseMessageModal();
    }
  };

  // Helper functions for adding/removing items from lists
  const addItem = (path: (string|number)[], newItem: any) => {
    setDraftContent(produce(draft => {
      const list = path.reduce((acc, key) => acc[key], draft as any);
      list.push(newItem);
    }));
  };

  const removeItem = (path: (string|number)[], index: number) => {
    setDraftContent(produce(draft => {
      const list = path.slice(0, -1).reduce((acc, key) => acc[key], draft as any);
      list[path[path.length - 1]].splice(index, 1);
    }));
  };

  const addTestimonial = () => addItem(['home', 'testimonials', 'items'], { quote: '', author: '', location: '' });
  const addTeamMember = () => addItem(['about', 'team', 'members'], { name: 'Anggota Baru', role: 'Peran', image: '' });
  const addAward = () => addItem(['about', 'awards', 'items'], { name: 'Nama Penghargaan', logo: '' });
  const addService = () => addItem(['services', 'items'], { iconName: 'ConsultationIcon', title: 'Layanan Baru', description: '', details: '', includes: [] });
  const addWorkflowStep = () => addItem(['services', 'workflow', 'steps'], { iconName: 'ConsultationIcon', title: 'Tahap Baru', description: '' });
  const addPackage = () => addItem(['pricing', 'packages', 'items'], { name: 'Paket Baru', price: 'Rp 0', features: [], buttonText: 'Pilih Paket', popular: false });
  const addFaq = () => addItem(['pricing', 'faq', 'items'], { question: '', answer: '' });

  return (
    <div>
      <PageBanner title="Admin Dashboard" />

      <div className="py-16 md:py-20 space-y-16 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
          <SectionTitle title="Statistik Website" className="mb-8" />
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            <div className="glass-panel p-6 text-center">
                <p className="text-4xl font-bold text-brand-yellow">{stats.totalUsers}</p>
                <p className="text-gray-500 dark:text-brand-gray mt-2">Total Pengguna</p>
            </div>
            <div className="glass-panel p-6 text-center">
                <p className="text-4xl font-bold text-brand-yellow">{stats.totalProjects}</p>
                <p className="text-gray-500 dark:text-brand-gray mt-2">Total Proyek</p>
            </div>
             <div className="glass-panel p-6 text-center">
                <p className="text-4xl font-bold text-brand-yellow">{stats.totalProducts}</p>
                <p className="text-gray-500 dark:text-brand-gray mt-2">Total Produk</p>
            </div>
            <div className="glass-panel p-6 text-center">
                <p className="text-4xl font-bold text-brand-yellow">{stats.totalArticles}</p>
                <p className="text-gray-500 dark:text-brand-gray mt-2">Total Artikel</p>
            </div>
             <div className="glass-panel p-6 text-center">
                <p className="text-4xl font-bold text-brand-yellow">{stats.totalAssets}</p>
                <p className="text-gray-500 dark:text-brand-gray mt-2">Total Aset Gambar</p>
            </div>
            <div className="glass-panel p-6 text-center">
                <p className="text-4xl font-bold text-brand-yellow">{stats.contactInquiries}</p>
                <p className="text-gray-500 dark:text-brand-gray mt-2">Pesan Belum Dibaca</p>
            </div>
          </div>
        </section>

        {/* Message Management */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
            <SectionTitle title="Manajemen Pesan Masuk" className="mb-8" />
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-black/10 dark:border-white/20">
                        <tr>
                           <th className="p-4">Status</th>
                           <th className="p-4">Nama</th>
                           <th className="p-4 hidden md:table-cell">Subjek</th>
                           <th className="p-4 hidden lg:table-cell">Tanggal</th>
                           <th className="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((msg) => (
                           <tr key={msg.id} className={`border-b border-black/10 dark:border-white/10 ${!msg.read ? 'font-bold' : 'font-normal'}`}>
                               <td className="p-4">
                                  {!msg.read && <div className="w-3 h-3 bg-brand-yellow rounded-full" title="Belum Dibaca"></div>}
                               </td>
                               <td className="p-4">{msg.name}</td>
                               <td className="p-4 hidden md:table-cell">{msg.subject}</td>
                               <td className="p-4 hidden lg:table-cell text-gray-600 dark:text-brand-gray text-sm">{new Date(msg.timestamp).toLocaleString('id-ID')}</td>
                               <td className="p-4 text-right">
                                   <button onClick={() => handleOpenMessageModal(msg)} className="font-semibold text-brand-yellow hover:underline text-sm transition-colors">
                                       Lihat Pesan
                                   </button>
                               </td>
                           </tr>
                        ))}
                         {messages.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center p-8 text-gray-500 dark:text-brand-gray">
                                    Tidak ada pesan masuk.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
        
        {/* Content Management */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
            <SectionTitle title="Manajemen Konten Halaman" className="mb-8" />
            <div className="space-y-4">
                <AccordionItem title="Halaman Utama">
                    <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-6">
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Pratinjau Tentang Kami</h4>
                          <ImageInput
                              label="Gambar Pratinjau"
                              value={draftContent.home.aboutPreview.image}
                              onChange={newValue => handleContentChange(['home', 'aboutPreview', 'image'], newValue)}
                          />
                          <label className={labelStyles}>Judul</label>
                          <input type="text" value={draftContent.home.aboutPreview.title} onChange={e => handleContentChange(['home', 'aboutPreview', 'title'], e.target.value)} className={inputStyles} />
                          <label className={labelStyles}>Subjudul</label>
                          <input type="text" value={draftContent.home.aboutPreview.subtitle} onChange={e => handleContentChange(['home', 'aboutPreview', 'subtitle'], e.target.value)} className={inputStyles} />
                          <label className={labelStyles}>Teks</label>
                          <textarea value={draftContent.home.aboutPreview.text} onChange={e => handleContentChange(['home', 'aboutPreview', 'text'], e.target.value)} className={textareaStyles}></textarea>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Pratinjau Layanan</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.home.servicesPreview.title} onChange={e => handleContentChange(['home', 'servicesPreview', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Subjudul</label>
                            <input type="text" value={draftContent.home.servicesPreview.subtitle} onChange={e => handleContentChange(['home', 'servicesPreview', 'subtitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Testimoni</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.home.testimonials.title} onChange={e => handleContentChange(['home', 'testimonials', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Subjudul</label>
                            <input type="text" value={draftContent.home.testimonials.subtitle} onChange={e => handleContentChange(['home', 'testimonials', 'subtitle'], e.target.value)} className={inputStyles} />

                            {draftContent.home.testimonials.items.map((item, index) => (
                                <div key={index} className="glass-panel p-3 my-2 relative">
                                    <button onClick={() => removeItem(['home', 'testimonials', 'items'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <label className={labelStyles}>Kutipan {index+1}</label>
                                    <textarea value={item.quote} onChange={e => handleContentChange(['home', 'testimonials', 'items', index, 'quote'], e.target.value)} className={textareaStyles}></textarea>
                                    <label className={labelStyles}>Author</label>
                                    <input type="text" value={item.author} onChange={e => handleContentChange(['home', 'testimonials', 'items', index, 'author'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Lokasi</label>
                                    <input type="text" value={item.location} onChange={e => handleContentChange(['home', 'testimonials', 'items', index, 'location'], e.target.value)} className={inputStyles} />
                                </div>
                            ))}
                            <Button type="button" onClick={addTestimonial} className="w-full text-sm !py-2 mt-2">Tambah Testimoni</Button>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Pratinjau Kontak</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.home.contactPreview.title} onChange={e => handleContentChange(['home', 'contactPreview', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Subjudul</label>
                            <input type="text" value={draftContent.home.contactPreview.subtitle} onChange={e => handleContentChange(['home', 'contactPreview', 'subtitle'], e.target.value)} className={inputStyles} />
                        </div>
                    </div>
                </AccordionItem>

                <AccordionItem title="Halaman Tentang Kami">
                     <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-6">
                        <div>
                            <label className={labelStyles}>Judul Banner</label>
                            <input type="text" value={draftContent.about.bannerTitle} onChange={e => handleContentChange(['about', 'bannerTitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Kisah Kami</h4>
                            <ImageInput
                                label="Gambar Kisah Kami"
                                value={draftContent.about.story.image}
                                onChange={newValue => handleContentChange(['about', 'story', 'image'], newValue)}
                            />
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.about.story.title} onChange={e => handleContentChange(['about', 'story', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Paragraf 1</label>
                            <textarea value={draftContent.about.story.p1} onChange={e => handleContentChange(['about', 'story', 'p1'], e.target.value)} className={textareaStyles}></textarea>
                            <label className={labelStyles}>Paragraf 2</label>
                            <textarea value={draftContent.about.story.p2} onChange={e => handleContentChange(['about', 'story', 'p2'], e.target.value)} className={textareaStyles}></textarea>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6 grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Visi</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.about.vision.title} onChange={e => handleContentChange(['about', 'vision', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Teks</label>
                            <textarea value={draftContent.about.vision.text} onChange={e => handleContentChange(['about', 'vision', 'text'], e.target.value)} className={textareaStyles}></textarea>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Misi</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.about.mission.title} onChange={e => handleContentChange(['about', 'mission', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Teks</label>
                            <textarea value={draftContent.about.mission.text} onChange={e => handleContentChange(['about', 'mission', 'text'], e.target.value)} className={textareaStyles}></textarea>
                          </div>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Tim</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.about.team.title} onChange={e => handleContentChange(['about', 'team', 'title'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Subjudul</label>
                            <input type="text" value={draftContent.about.team.subtitle} onChange={e => handleContentChange(['about', 'team', 'subtitle'], e.target.value)} className={inputStyles} />
                            {draftContent.about.team.members.map((member, index) => (
                               <div key={index} className="glass-panel p-4 my-2 relative">
                                    <button onClick={() => removeItem(['about', 'team', 'members'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <ImageInput
                                        label={`Gambar Anggota Tim ${index + 1}`}
                                        value={member.image}
                                        onChange={newValue => handleContentChange(['about', 'team', 'members', index, 'image'], newValue)}
                                    />
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelStyles}>Nama Anggota</label>
                                            <input type="text" value={member.name} onChange={e => handleContentChange(['about', 'team', 'members', index, 'name'], e.target.value)} className={inputStyles} />
                                        </div>
                                        <div>
                                            <label className={labelStyles}>Peran</label>
                                            <input type="text" value={member.role} onChange={e => handleContentChange(['about', 'team', 'members', index, 'role'], e.target.value)} className={inputStyles} />
                                        </div>
                                    </div>
                               </div>
                            ))}
                            <Button type="button" onClick={addTeamMember} className="w-full text-sm !py-2 mt-2">Tambah Anggota Tim</Button>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Penghargaan</h4>
                            <label className={labelStyles}>Judul</label>
                            <input type="text" value={draftContent.about.awards.title} onChange={e => handleContentChange(['about', 'awards', 'title'], e.target.value)} className={inputStyles} />
                            {draftContent.about.awards.items.map((award, index) => (
                                <div key={index} className="glass-panel p-4 my-2 relative">
                                    <button onClick={() => removeItem(['about', 'awards', 'items'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <label className={labelStyles}>Nama Penghargaan</label>
                                    <input type="text" value={award.name} onChange={e => handleContentChange(['about', 'awards', 'items', index, 'name'], e.target.value)} className={inputStyles} />
                                    <ImageInput label="Logo Penghargaan" value={award.logo} onChange={newValue => handleContentChange(['about', 'awards', 'items', index, 'logo'], newValue)} className="mt-3" />
                                </div>
                            ))}
                            <Button type="button" onClick={addAward} className="w-full text-sm !py-2 mt-2">Tambah Penghargaan</Button>
                        </div>
                    </div>
                </AccordionItem>
                
                 <AccordionItem title="Halaman Layanan">
                     <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-6">
                        <div>
                          <label className={labelStyles}>Judul Banner</label>
                          <input type="text" value={draftContent.services.bannerTitle} onChange={e => handleContentChange(['services', 'bannerTitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div>
                           <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Intro Layanan</h4>
                           <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.services.intro.title} onChange={e => handleContentChange(['services', 'intro', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Subjudul</label>
                           <input type="text" value={draftContent.services.intro.subtitle} onChange={e => handleContentChange(['services', 'intro', 'subtitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Daftar Layanan</h4>
                            {draftContent.services.items.map((service, index) => (
                               <div key={index} className="glass-panel p-3 my-2 relative">
                                    <button onClick={() => removeItem(['services', 'items'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <label className={labelStyles}>Judul Layanan {index+1}</label>
                                    <input type="text" value={service.title} onChange={e => handleContentChange(['services', 'items', index, 'title'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Deskripsi Singkat</label>
                                    <input type="text" value={service.description} onChange={e => handleContentChange(['services', 'items', index, 'description'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Detail</label>
                                    <textarea value={service.details} onChange={e => handleContentChange(['services', 'items', index, 'details'], e.target.value)} className={textareaStyles}></textarea>
                                    <label className={labelStyles}>Fitur (satu per baris)</label>
                                    <textarea 
                                        value={service.includes.join('\n')} 
                                        onChange={e => handleContentChange(['services', 'items', index, 'includes'], e.target.value.split('\n'))} 
                                        className={textareaStyles}>
                                    </textarea>
                               </div>
                            ))}
                            <Button type="button" onClick={addService} className="w-full text-sm !py-2 mt-2">Tambah Layanan</Button>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                           <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Alur Kerja</h4>
                           <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.services.workflow.title} onChange={e => handleContentChange(['services', 'workflow', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Subjudul</label>
                           <input type="text" value={draftContent.services.workflow.subtitle} onChange={e => handleContentChange(['services', 'workflow', 'subtitle'], e.target.value)} className={inputStyles} />
                           {draftContent.services.workflow.steps.map((step, index) => (
                               <div key={index} className="glass-panel p-3 my-2 relative">
                                    <button onClick={() => removeItem(['services', 'workflow', 'steps'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <label className={labelStyles}>Judul Tahap {index+1}</label>
                                    <input type="text" value={step.title} onChange={e => handleContentChange(['services', 'workflow', 'steps', index, 'title'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Deskripsi</label>
                                    <textarea value={step.description} onChange={e => handleContentChange(['services', 'workflow', 'steps', index, 'description'], e.target.value)} className={textareaStyles}></textarea>
                               </div>
                           ))}
                           <Button type="button" onClick={addWorkflowStep} className="w-full text-sm !py-2 mt-2">Tambah Tahap Alur Kerja</Button>
                        </div>
                         <div className="border-t border-black/10 dark:border-white/10 pt-6">
                           <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Call to Action (CTA)</h4>
                           <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.services.cta.title} onChange={e => handleContentChange(['services', 'cta', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Teks</label>
                           <textarea value={draftContent.services.cta.text} onChange={e => handleContentChange(['services', 'cta', 'text'], e.target.value)} className={textareaStyles}></textarea>
                        </div>
                    </div>
                </AccordionItem>

                 <AccordionItem title="Halaman Biaya">
                     <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-6">
                         <div>
                          <label className={labelStyles}>Judul Banner</label>
                          <input type="text" value={draftContent.pricing.bannerTitle} onChange={e => handleContentChange(['pricing', 'bannerTitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                           <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Paket Harga</h4>
                           <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.pricing.packages.title} onChange={e => handleContentChange(['pricing', 'packages', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Subjudul</label>
                           <input type="text" value={draftContent.pricing.packages.subtitle} onChange={e => handleContentChange(['pricing', 'packages', 'subtitle'], e.target.value)} className={inputStyles} />
                            {draftContent.pricing.packages.items.map((pkg, index) => (
                                <div key={index} className="glass-panel p-3 my-2 relative">
                                    <button onClick={() => removeItem(['pricing', 'packages', 'items'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <label className={labelStyles}>Nama Paket {index+1}</label>
                                    <input type="text" value={pkg.name} onChange={e => handleContentChange(['pricing', 'packages', 'items', index, 'name'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Harga (teks)</label>
                                    <input type="text" value={pkg.price} onChange={e => handleContentChange(['pricing', 'packages', 'items', index, 'price'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Fitur (satu per baris)</label>
                                    <textarea value={pkg.features.join('\n')} onChange={e => handleContentChange(['pricing', 'packages', 'items', index, 'features'], e.target.value.split('\n'))} className={textareaStyles}></textarea>
                                    <label className={labelStyles}>Teks Tombol</label>
                                    <input type="text" value={pkg.buttonText} onChange={e => handleContentChange(['pricing', 'packages', 'items', index, 'buttonText'], e.target.value)} className={inputStyles} />
                                    <div className="mt-2 flex items-center gap-2">
                                        <input type="checkbox" id={`popular-${index}`} checked={pkg.popular} onChange={e => handleContentChange(['pricing', 'packages', 'items', index, 'popular'], e.target.checked)} className="w-4 h-4 rounded text-brand-yellow focus:ring-brand-yellow" />
                                        <label htmlFor={`popular-${index}`} className="text-sm text-gray-500 dark:text-brand-gray">Tandai sebagai Populer</label>
                                    </div>
                                </div>
                            ))}
                            <Button type="button" onClick={addPackage} className="w-full text-sm !py-2 mt-2">Tambah Paket Harga</Button>
                        </div>
                         <div className="border-t border-black/10 dark:border-white/10 pt-6">
                           <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Kalkulator</h4>
                           <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.pricing.calculator.title} onChange={e => handleContentChange(['pricing', 'calculator', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Subjudul</label>
                           <input type="text" value={draftContent.pricing.calculator.subtitle} onChange={e => handleContentChange(['pricing', 'calculator', 'subtitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">FAQ</h4>
                             <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.pricing.faq.title} onChange={e => handleContentChange(['pricing', 'faq', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Subjudul</label>
                           <input type="text" value={draftContent.pricing.faq.subtitle} onChange={e => handleContentChange(['pricing', 'faq', 'subtitle'], e.target.value)} className={inputStyles} />
                            {draftContent.pricing.faq.items.map((item, index) => (
                               <div key={index} className="glass-panel p-3 my-2 relative">
                                    <button onClick={() => removeItem(['pricing', 'faq', 'items'], index)} className="absolute top-2 right-2 p-1 text-red-400 hover:bg-red-400/20 rounded-full"><CloseIcon className="w-4 h-4" /></button>
                                    <label className={labelStyles}>Pertanyaan {index+1}</label>
                                    <input type="text" value={item.question} onChange={e => handleContentChange(['pricing', 'faq', 'items', index, 'question'], e.target.value)} className={inputStyles} />
                                    <label className={labelStyles}>Jawaban</label>
                                    <textarea value={item.answer} onChange={e => handleContentChange(['pricing', 'faq', 'items', index, 'answer'], e.target.value)} className={textareaStyles}></textarea>
                               </div>
                            ))}
                            <Button type="button" onClick={addFaq} className="w-full text-sm !py-2 mt-2">Tambah FAQ</Button>
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                           <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Call to Action (CTA)</h4>
                           <label className={labelStyles}>Judul</label>
                           <input type="text" value={draftContent.pricing.cta.title} onChange={e => handleContentChange(['pricing', 'cta', 'title'], e.target.value)} className={inputStyles} />
                           <label className={labelStyles}>Teks</label>
                           <textarea value={draftContent.pricing.cta.text} onChange={e => handleContentChange(['pricing', 'cta', 'text'], e.target.value)} className={textareaStyles}></textarea>
                        </div>
                    </div>
                </AccordionItem>

                <AccordionItem title="Halaman Kontak & Footer">
                     <div className="p-4 border-t border-black/10 dark:border-white/10 space-y-6">
                        <div>
                          <label className={labelStyles}>Judul Banner</label>
                          <input type="text" value={draftContent.contact.bannerTitle} onChange={e => handleContentChange(['contact', 'bannerTitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Intro Kontak</h4>
                          <label className={labelStyles}>Judul</label>
                          <input type="text" value={draftContent.contact.intro.title} onChange={e => handleContentChange(['contact', 'intro', 'title'], e.target.value)} className={inputStyles} />
                          <label className={labelStyles}>Subjudul</label>
                          <input type="text" value={draftContent.contact.intro.subtitle} onChange={e => handleContentChange(['contact', 'intro', 'subtitle'], e.target.value)} className={inputStyles} />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Info Kontak</h4>
                            <label className={labelStyles}>Alamat</label>
                            <input type="text" value={draftContent.contact.info.address} onChange={e => handleContentChange(['contact', 'info', 'address'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Email</label>
                            <input type="email" value={draftContent.contact.info.email} onChange={e => handleContentChange(['contact', 'info', 'email'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Telepon</label>
                            <input type="tel" value={draftContent.contact.info.phone} onChange={e => handleContentChange(['contact', 'info', 'phone'], e.target.value)} className={inputStyles} />
                            <label className={labelStyles}>Jam Kerja</label>
                            <input type="text" value={draftContent.contact.info.hours} onChange={e => handleContentChange(['contact', 'info', 'hours'], e.target.value)} className={inputStyles} />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Sosial Media</h4>
                            <label className={labelStyles}>URL Instagram</label>
                            <input type="url" value={draftContent.contact.info.socials.instagram} onChange={e => handleContentChange(['contact', 'info', 'socials', 'instagram'], e.target.value)} className={inputStyles} placeholder="https://instagram.com/..." />
                            <label className={labelStyles}>URL Facebook</label>
                            <input type="url" value={draftContent.contact.info.socials.facebook} onChange={e => handleContentChange(['contact', 'info', 'socials', 'facebook'], e.target.value)} className={inputStyles} placeholder="https://facebook.com/..." />
                            <label className={labelStyles}>URL LinkedIn</label>
                            <input type="url" value={draftContent.contact.info.socials.linkedin} onChange={e => handleContentChange(['contact', 'info', 'socials', 'linkedin'], e.target.value)} className={inputStyles} placeholder="https://linkedin.com/..." />
                        </div>
                        <div className="border-t border-black/10 dark:border-white/10 pt-6">
                            <h4 className="font-bold text-lg mb-2 text-brand-text-light dark:text-white">Footer</h4>
                            <label className={labelStyles}>Tagline</label>
                            <input type="text" value={draftContent.footer.tagline} onChange={e => handleContentChange(['footer', 'tagline'], e.target.value)} className={inputStyles} />
                        </div>
                    </div>
                </AccordionItem>
            </div>
            <div className="mt-8 text-right">
                <Button onClick={handleSaveContent}>Simpan Semua Perubahan</Button>
            </div>
        </section>

        {/* Asset Management */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
            <SectionTitle title="Manajemen Aset" className="mb-8" />
            <p className="text-center text-gray-600 dark:text-brand-gray mb-6 max-w-2xl mx-auto">
                Kelola semua aset gambar yang digunakan di seluruh website. Unggah, periksa penggunaan, dan hapus aset yang tidak lagi diperlukan.
            </p>
            <div className="text-center">
                <Button to="/admin/assets">Buka Manajer Aset</Button>
            </div>
        </section>
        
        {/* Portfolio Management */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
           <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
               <SectionTitle title="Manajemen Portofolio" className="mb-0 text-left" />
               <Button onClick={() => handleOpenModal()}>Tambah Proyek</Button>
           </div>
           <div className="overflow-x-auto">
               <table className="w-full text-left">
                   <thead className="border-b border-black/10 dark:border-white/20">
                       <tr>
                           <th className="p-4">Judul</th>
                           <th className="p-4 hidden md:table-cell">Kategori</th>
                           <th className="p-4 hidden lg:table-cell">Tahun</th>
                           <th className="p-4 text-right">Aksi</th>
                       </tr>
                   </thead>
                   <tbody>
                       {projects.map((project) => (
                           <tr key={project.id} className="border-b border-black/10 dark:border-white/10">
                               <td className="p-4 font-semibold">{project.title}</td>
                               <td className="p-4 hidden md:table-cell text-gray-600 dark:text-brand-gray">{project.category}</td>
                               <td className="p-4 hidden lg:table-cell text-gray-600 dark:text-brand-gray">{project.year}</td>
                               <td className="p-4">
                                   <div className="flex gap-4 justify-end">
                                       <button onClick={() => handleOpenModal(project)} className="font-semibold text-brand-yellow hover:underline text-sm transition-colors">Edit</button>
                                       <button onClick={() => handleDeleteProject(project.id)} className="font-semibold text-red-400 hover:underline text-sm transition-colors">Hapus</button>
                                   </div>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       </section>

        {/* Product Management */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
           <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
               <SectionTitle title="Manajemen Produk" className="mb-0 text-left" />
               <Button onClick={() => handleOpenProductModal()}>Tambah Produk</Button>
           </div>
           <div className="overflow-x-auto">
               <table className="w-full text-left">
                   <thead className="border-b border-black/10 dark:border-white/20">
                       <tr>
                           <th className="p-4">Nama Produk</th>
                           <th className="p-4 hidden md:table-cell">Kategori</th>
                           <th className="p-4 hidden lg:table-cell">Harga</th>
                           <th className="p-4 text-right">Aksi</th>
                       </tr>
                   </thead>
                   <tbody>
                       {products.map((product) => (
                           <tr key={product.id} className="border-b border-black/10 dark:border-white/10">
                               <td className="p-4 font-semibold">{product.name}</td>
                               <td className="p-4 hidden md:table-cell text-gray-600 dark:text-brand-gray">{product.category}</td>
                               <td className="p-4 hidden lg:table-cell text-gray-600 dark:text-brand-gray">Rp {product.price.toLocaleString('id-ID')}</td>
                               <td className="p-4">
                                   <div className="flex gap-4 justify-end">
                                       <button onClick={() => handleOpenProductModal(product)} className="font-semibold text-brand-yellow hover:underline text-sm transition-colors">Edit</button>
                                       <button onClick={() => handleDeleteProduct(product.id)} className="font-semibold text-red-400 hover:underline text-sm transition-colors">Hapus</button>
                                   </div>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       </section>
       
       {/* Blog Management */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
           <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
               <SectionTitle title="Manajemen Blog" className="mb-0 text-left" />
               <Button onClick={() => handleOpenArticleModal()}>Tambah Artikel</Button>
           </div>
           <div className="overflow-x-auto">
               <table className="w-full text-left">
                   <thead className="border-b border-black/10 dark:border-white/20">
                       <tr>
                           <th className="p-4">Judul Artikel</th>
                           <th className="p-4 hidden md:table-cell">Kategori</th>
                           <th className="p-4 hidden lg:table-cell">Tanggal Publikasi</th>
                           <th className="p-4 text-right">Aksi</th>
                       </tr>
                   </thead>
                   <tbody>
                       {articles.map((article) => (
                           <tr key={article.id} className="border-b border-black/10 dark:border-white/10">
                               <td className="p-4 font-semibold">{article.title}</td>
                               <td className="p-4 hidden md:table-cell text-gray-600 dark:text-brand-gray">{article.category}</td>
                               <td className="p-4 hidden lg:table-cell text-gray-600 dark:text-brand-gray">{new Date(article.date).toLocaleDateString('id-ID')}</td>
                               <td className="p-4">
                                   <div className="flex gap-4 justify-end">
                                       <button onClick={() => handleOpenArticleModal(article)} className="font-semibold text-brand-yellow hover:underline text-sm transition-colors">Edit</button>
                                       <button onClick={() => handleDeleteArticle(article.id)} className="font-semibold text-red-400 hover:underline text-sm transition-colors">Hapus</button>
                                   </div>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
       </section>

        {/* User List */}
        <section className="glass-panel p-6 sm:p-8 md:p-12">
            <SectionTitle title="Manajemen Pengguna" className="mb-8" />
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b border-black/10 dark:border-white/20">
                        <tr>
                            <th className="p-4">Nama Pengguna</th>
                            <th className="p-4">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b border-black/10 dark:border-white/10">
                                <td className="p-4">{user.username}</td>
                                <td className="p-4 text-gray-600 dark:text-brand-gray">{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

      </div>
      <ProjectFormModal 
         isOpen={isModalOpen}
         onClose={handleCloseModal}
         onSave={handleSaveProject}
         projectToEdit={projectToEdit}
     />
     <ProductFormModal
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
        onSave={handleSaveProduct}
        productToEdit={productToEdit}
    />
     <ArticleFormModal
        isOpen={isArticleModalOpen}
        onClose={handleCloseArticleModal}
        onSave={handleSaveArticle}
        articleToEdit={articleToEdit}
    />
    <MessageDetailModal
        isOpen={isMessageModalOpen}
        onClose={handleCloseMessageModal}
        onDelete={handleDeleteMessage}
        message={selectedMessage}
    />
    </div>
  );
};

export default AdminDashboardPage;