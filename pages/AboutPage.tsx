import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useContent } from '../contexts/ContentContext';

const AboutPage: React.FC = () => {
    const { content } = useContent();
    const { bannerTitle, story, vision, mission, team, awards } = content.about;

    const storySection = useScrollAnimation<HTMLDivElement>();
    const visionMissionSection = useScrollAnimation<HTMLDivElement>();
    const teamSection = useScrollAnimation<HTMLDivElement>();
    const awardsSection = useScrollAnimation<HTMLDivElement>();

  return (
    <div>
      <PageBanner title={bannerTitle} />
      
      <div className="py-16 md:py-20 space-y-16 md:space-y-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <section ref={storySection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${storySection.animationClasses}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <SectionTitle title={story.title} className="text-center md:text-left" />
              <p className="text-gray-600 dark:text-brand-gray text-lg leading-relaxed mb-4">
                {story.p1}
              </p>
              <p className="text-gray-600 dark:text-brand-gray text-lg leading-relaxed">
                {story.p2}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src={story.image} alt="Architectural sketch" className="rounded-lg shadow-xl w-full h-full object-cover"/>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section ref={visionMissionSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${visionMissionSection.animationClasses}`}>
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-brand-text-light dark:text-white mb-4">{vision.title}</h3>
              <p className="text-xl text-gray-600 dark:text-brand-gray italic">{vision.text}</p>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-brand-text-light dark:text-white mb-4">{mission.title}</h3>
              <p className="text-xl text-gray-600 dark:text-brand-gray italic">{mission.text}</p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section ref={teamSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${teamSection.animationClasses}`}>
          <SectionTitle title={team.title} subtitle={team.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.members.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4 glass-panel p-2">
                  <img src={member.image} alt={member.name} className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"/>
                </div>
                <h4 className="text-xl font-bold text-brand-text-light dark:text-white">{member.name}</h4>
                <p className="text-brand-yellow">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Certifications */}
        <section ref={awardsSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${awardsSection.animationClasses}`}>
          <SectionTitle title={awards.title} />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 invert-0 dark:invert-[.80] opacity-80 dark:opacity-80">
            {awards.items.map((award, index) => (
               <img key={index} src={award.logo} alt={award.name} title={award.name} className="h-12 md:h-16" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;