import React, { useState, useMemo } from 'react';
import AnimatedLink from '../components/AnimatedLink';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import { useProjects } from '../contexts/ProjectContext';
import { ProjectCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const allCategories: ProjectCategory[] = ['Arsitektur', 'Interior', 'Renovasi', '360 Virtual Reality', '3D Animasi'];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'Semua'>('Semua');
  const { projects } = useProjects();
  const projectSection = useScrollAnimation<HTMLDivElement>();

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Semua') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter, projects]);
  
  const FilterButton:React.FC<{filter: ProjectCategory | 'Semua'}> = ({filter}) => {
    const isActive = activeFilter === filter;
    return (
        <button
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 glass-panel ${
            isActive
                ? 'bg-brand-yellow/50 shadow-[0_0_15px_rgba(251,191,36,0.4)]'
                : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20'
            }`}
        >
            {filter}
        </button>
    )
  }

  return (
    <div>
      <PageBanner title="Portofolio Kami" />

      <div className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <section ref={projectSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${projectSection.animationClasses}`}>
          <SectionTitle title="Karya Terbaik Kami" subtitle="Portofolio" />

          {/* Project Filter */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
            <FilterButton filter="Semua" />
            {allCategories.map(category => (
                <FilterButton key={category} filter={category} />
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <AnimatedLink to={`/portofolio/${project.id}`} key={project.id} className="group block overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-105 glow-on-hover">
                <div className="relative">
                  <img src={project.mainImage} alt={project.title} className="w-full h-72 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:bg-brand-yellow/70 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <span className="text-xs bg-brand-yellow text-brand-dark font-semibold px-2 py-1 rounded">{project.category}</span>
                    <h3 className="text-lg sm:text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-sm">{project.location} ({project.year})</p>
                  </div>
                </div>
              </AnimatedLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;