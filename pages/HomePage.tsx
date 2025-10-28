import React, { useState, useEffect, useCallback, useRef } from 'react';
import AnimatedLink from '../components/AnimatedLink';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../components/Hero';
import { useProjects } from '../contexts/ProjectContext';
import { useContent } from '../contexts/ContentContext';
import { ArchitectureIcon, InteriorIcon, RenovationIcon } from '../components/icons';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { projects } = useProjects();
  const { content } = useContent();
  const intervalRef = useRef<number | null>(null);

  const { aboutPreview, servicesPreview, testimonials, contactPreview } = content.home;
  const services = content.services.items.slice(0,3); // show first 3 services
  
  const aboutSection = useScrollAnimation<HTMLDivElement>();
  const servicesSection = useScrollAnimation<HTMLDivElement>();
  const projectsSection = useScrollAnimation<HTMLDivElement>();
  const testimonialsSection = useScrollAnimation<HTMLDivElement>();
  const contactSection = useScrollAnimation<HTMLDivElement>();

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.items.length);
  }, [testimonials.items.length]);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const startSlider = useCallback(() => {
    stopSlider(); // Clear any existing interval
    intervalRef.current = window.setInterval(nextTestimonial, 5000); // Change slide every 5 seconds
  }, [nextTestimonial]);

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [startSlider]);

  
  const iconMap: { [key: string]: React.ReactElement } = {
    ArchitectureIcon: <ArchitectureIcon className="w-12 h-12 text-brand-yellow" />,
    InteriorIcon: <InteriorIcon className="w-12 h-12 text-brand-yellow" />,
    RenovationIcon: <RenovationIcon className="w-12 h-12 text-brand-yellow" />,
    ConsultationIcon: <ArchitectureIcon className="w-12 h-12 text-brand-yellow" />, // fallback
  };

  return (
    <div>
      <Hero />
      {/* Page content wrapper */}
      <div className="py-16 md:py-20 space-y-16 md:space-y-20 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Preview */}
        <section ref={aboutSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${aboutSection.animationClasses}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={aboutPreview.image} alt="Team working" className="rounded-lg shadow-xl aspect-square object-cover" />
            <div className="text-center md:text-left">
              <SectionTitle title={aboutPreview.title} subtitle={aboutPreview.subtitle} className="text-center md:text-left" />
              <p className="text-gray-600 dark:text-brand-gray text-lg mb-6 leading-relaxed">
                {aboutPreview.text}
              </p>
              <Button to="/about">Selengkapnya</Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section ref={servicesSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${servicesSection.animationClasses}`}>
          <SectionTitle title={servicesPreview.title} subtitle={servicesPreview.subtitle} />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 text-center transition-all duration-300 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 hover:-translate-y-2">
                <div className="flex items-center justify-center h-24 w-24 mx-auto mb-6 rounded-full bg-brand-yellow/10 ring-1 ring-brand-yellow/30 transition-all duration-300 group-hover:bg-brand-yellow/20 group-hover:ring-4">
                   {iconMap[service.iconName] || <ArchitectureIcon className="w-12 h-12 text-brand-yellow" />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-text-light dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-brand-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" ref={projectsSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${projectsSection.animationClasses}`}>
          <SectionTitle title="Proyek Pilihan" subtitle="Portofolio" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <AnimatedLink to={`/portofolio/${project.id}`} key={project.id} className="group block overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-105 glow-on-hover">
                <div className="relative">
                  <img src={project.mainImage} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-brand-yellow/60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.category} - {project.location} ({project.year})</p>
                  </div>
                </div>
              </AnimatedLink>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/portofolio">Lihat Portofolio Lengkap</Button>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          ref={testimonialsSection.ref}
          className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${testimonialsSection.animationClasses}`}
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
          aria-roledescription="carousel"
          aria-label="Testimoni Klien"
        >
          <SectionTitle title={testimonials.title} subtitle={testimonials.subtitle} />
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-auto md:h-64 overflow-hidden">
              {testimonials.items.map((item, index) => (
                <div
                  key={index}
                  className="absolute w-full h-full transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                    opacity: index === currentTestimonial ? 1 : 0,
                  }}
                  aria-hidden={index !== currentTestimonial}
                >
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <div className="glass-panel p-8 max-w-2xl mx-auto">
                        <blockquote className="z-10">
                            <p className="text-lg italic text-gray-600 dark:text-brand-gray mb-6">{item.quote}</p>
                            <footer className="flex items-center justify-center">
                                <img src={`https://i.pravatar.cc/150?u=${item.author.replace(/\s/g, '')}`} alt={item.author} className="w-10 h-10 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold text-brand-text-light dark:text-white">{item.author}</p>
                                    <cite className="text-sm text-gray-500 dark:text-brand-gray not-italic font-normal">{item.location}</cite>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full glass-panel hover:bg-black/10 dark:hover:bg-white/20 transition hidden sm:block" aria-label="Testimoni Sebelumnya">‹</button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full glass-panel hover:bg-black/10 dark:hover:bg-white/20 transition hidden sm:block" aria-label="Testimoni Berikutnya">›</button>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3" role="tablist" aria-label="Navigasi testimoni">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-brand-yellow scale-125' : 'bg-black/20 dark:bg-white/50 hover:bg-black/30 dark:hover:bg-white'
                  }`}
                  aria-label={`Lihat testimoni ${index + 1}`}
                  aria-selected={index === currentTestimonial}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </section>


        {/* Contact Preview */}
        <section ref={contactSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${contactSection.animationClasses}`}>
          <div className="text-center">
            <SectionTitle title={contactPreview.title} subtitle={contactPreview.subtitle} />
            <div className="text-lg space-y-2 mb-8 text-gray-600 dark:text-gray-300">
              <p>Alamat: {content.contact.info.address}</p>
              <p>Email: {content.contact.info.email}</p>
              <p>Telepon: {content.contact.info.phone}</p>
            </div>
            <Button to="/contact">Hubungi Kami</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;