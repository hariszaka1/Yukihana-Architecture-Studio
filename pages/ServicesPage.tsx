import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from '../components/Button';
import { 
    CheckmarkCircleIcon,
    ArchitectureIcon,
    InteriorIcon,
    RenovationIcon,
    ConsultationIcon,
    DesignConceptIcon,
    RevisionIcon,
    ExecutionIcon,
    HandoverIcon
} from '../components/icons';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import { useContent } from '../contexts/ContentContext';
import { IconName } from '../types';

const iconMap: Record<IconName, React.ReactElement<{ className?: string }>> = {
    ArchitectureIcon: <ArchitectureIcon />,
    InteriorIcon: <InteriorIcon />,
    RenovationIcon: <RenovationIcon />,
    ConsultationIcon: <ConsultationIcon />,
    DesignConceptIcon: <DesignConceptIcon />,
    RevisionIcon: <RevisionIcon />,
    ExecutionIcon: <ExecutionIcon />,
    HandoverIcon: <HandoverIcon />,
};

const ServicesPage: React.FC = () => {
    const { content } = useContent();
    const { bannerTitle, intro, items: services, workflow, cta } = content.services;
    const servicesSection = useScrollAnimation<HTMLDivElement>();
    const workflowSection = useScrollAnimation<HTMLDivElement>();
    const ctaSection = useScrollAnimation<HTMLDivElement>();
    const { setIsWhatsAppOpen } = useWhatsApp();

  return (
    <div>
      <PageBanner title={bannerTitle} />

      <div className="py-16 md:py-20 space-y-20 md:space-y-24 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Detailed Service List */}
        <section ref={servicesSection.ref} className={`transition-all duration-700 ${servicesSection.animationClasses}`}>
          <SectionTitle title={intro.title} subtitle={intro.subtitle} />
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="glass-panel p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-3 flex justify-center">
                    <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-gray-200 dark:bg-brand-accent-dark">
                      <div className="absolute inset-0 rounded-full bg-brand-yellow/10 animate-pulse"></div>
                      <div className="absolute inset-2 rounded-full bg-brand-light dark:bg-brand-dark/50 backdrop-blur-sm"></div>
                      <div className="relative z-10">
                        {React.cloneElement(iconMap[service.iconName], { className: 'w-16 h-16 text-brand-yellow' })}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-xl md:text-3xl font-bold text-brand-text-light dark:text-white mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-brand-gray text-lg leading-relaxed mb-6">{service.details}</p>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckmarkCircleIcon className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                          <span className="text-gray-600 dark:text-brand-gray">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Workflow */}
        <section ref={workflowSection.ref} className={`transition-all duration-700 ${workflowSection.animationClasses}`}>
            <SectionTitle title={workflow.title} subtitle={workflow.subtitle} />
            <div className="relative max-w-2xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 h-full w-0.5 bg-black/10 dark:bg-white/20"></div>
                
                <div className="space-y-12">
                    {workflow.steps.map((step, index) => (
                        <div key={index} className="relative flex items-start gap-x-6 pl-8">
                            {/* Icon Circle */}
                            <div className="absolute left-8 -translate-x-1/2 mt-1 z-10 flex items-center justify-center w-12 h-12 bg-brand-light dark:bg-brand-dark rounded-full border-2 border-brand-yellow text-brand-yellow">
                                {React.cloneElement(iconMap[step.iconName], { className: 'w-8 h-8' })}
                            </div>
                            <div className="pl-10 pt-1">
                                <h4 className="text-xl font-bold text-brand-text-light dark:text-white mb-1">{step.title}</h4>
                                <p className="text-gray-600 dark:text-brand-gray">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section ref={ctaSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 text-center transition-all duration-700 ${ctaSection.animationClasses}`}>
            <SectionTitle title={cta.title} />
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-brand-gray mb-8">
                {cta.text}
            </p>
            <div className="flex justify-center gap-4">
                <Button to="/contact">
                    Hubungi Kami
                </Button>
                <Button onClick={() => setIsWhatsAppOpen(true)} className="bg-whatsapp-green hover:bg-whatsapp-green-dark !text-white">
                    Konsultasi via WhatsApp
                </Button>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;