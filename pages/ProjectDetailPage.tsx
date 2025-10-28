import React, { useState, useEffect } from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { useProjects } from '../contexts/ProjectContext';
import Button from '../components/Button';
import { CloseIcon } from '../components/icons';
import AnimatedLink from '../components/AnimatedLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const ProjectDetailPage: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const { transitionTo } = usePageTransition();
  const { projects } = useProjects();
  const project = projects.find(p => p.id === id);

  const [lightboxImageIndex, setLightboxImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openLightbox = (index: number) => setLightboxImageIndex(index);
  const closeLightbox = () => setLightboxImageIndex(null);

  const showNextImage = () => {
    if (lightboxImageIndex === null || !project) return;
    setLightboxImageIndex((prevIndex) => (prevIndex! + 1) % project.gallery.length);
  };

  const showPrevImage = () => {
    if (lightboxImageIndex === null || !project) return;
    setLightboxImageIndex((prevIndex) => (prevIndex! - 1 + project.gallery.length) % project.gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxImageIndex]);

  if (!project) {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            <div className="glass-panel p-12">
              <h1 className="text-4xl font-bold text-brand-text-light dark:text-white mb-4">404 - Proyek Tidak Ditemukan</h1>
              <p className="text-gray-600 dark:text-brand-gray mb-8">Maaf, proyek yang Anda cari tidak ada atau mungkin telah dihapus.</p>
              <Button onClick={() => transitionTo('/portofolio')}>Kembali ke Portofolio</Button>
            </div>
        </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="h-screen-75 bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${project.mainImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-48 relative z-10 pb-16">
        <div className="glass-panel p-6 sm:p-8 md:p-12">
          {/* Project Info */}
          <header className="mb-8 border-b border-black/10 dark:border-white/20 pb-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light dark:text-white mb-2">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 dark:text-brand-gray">
              <span><strong>Kategori:</strong> {project.category}</span>
              <span><strong>Lokasi:</strong> {project.location}</span>
              <span><strong>Tahun:</strong> {project.year}</span>
            </div>
          </header>

          {/* Full Description */}
          <article className="prose prose-lg max-w-none mb-12">
            <p>{project.description}</p>
          </article>

          {/* Gallery */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-light dark:text-white mb-8">Galeri Proyek</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="overflow-hidden rounded-lg group relative transition-all duration-300 shadow-lg block w-full text-left"
                  aria-label={`Lihat gambar ${index + 1} dari ${project.gallery.length}`}
                >
                  <img src={image} alt={`${project.title} gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-lg ring-4 ring-inset ring-transparent group-hover:ring-brand-yellow group-hover:shadow-[0_0_25px_#FBBF24] transition-all duration-300 pointer-events-none"></div>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <div className="text-center pb-16">
        <AnimatedLink to="/portofolio" className="text-brand-text-light dark:text-white font-semibold hover:text-brand-yellow transition-colors text-lg">
          &larr; Kembali ke Portofolio
        </AnimatedLink>
      </div>

      {lightboxImageIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white z-30 glass-panel p-2 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Tutup lightbox"
          >
            <CloseIcon className="w-8 h-8" />
          </button>
          
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-30 glass-panel p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Gambar sebelumnya"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); showNextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-30 glass-panel p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Gambar berikutnya"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </>
          )}

          <div className="relative w-full h-full flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
            <img
              key={lightboxImageIndex}
              src={project.gallery[lightboxImageIndex]}
              alt={`${project.title} gallery image ${lightboxImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
              loading="lazy"
            />
          </div>
          
          {project.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {lightboxImageIndex + 1} / {project.gallery.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;