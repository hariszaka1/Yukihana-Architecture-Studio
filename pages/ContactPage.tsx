



import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { useContent } from '../contexts/ContentContext';
import { useMessages } from '../contexts/MessagesContext';
import { 
    InstagramIcon, 
    FacebookIcon, 
    LinkedInIcon,
    MapPinIcon,
    EmailIcon,
    ClockIcon,
    PhoneIcon,
} from '../components/icons';

const ContactPage: React.FC = () => {
  const { content } = useContent();
  const { bannerTitle, intro, info } = content.contact;
  const { addMessage } = useMessages();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage({
      ...formData,
      timestamp: new Date().toISOString(),
    });
    alert('Pesan Terkirim! Terima kasih, kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  const inputStyles = "w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none placeholder-gray-500 dark:placeholder-gray-400";

  const contactDetails = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />,
      title: "Alamat Kantor",
      content: info.address,
    },
    {
      icon: <EmailIcon className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />,
      title: "Email",
      content: info.email,
      href: `mailto:${info.email}`,
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />,
      title: "Telepon",
      content: info.phone,
      href: `tel:${info.phone.replace(/\s|-/g, '')}`,
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-brand-yellow flex-shrink-0 mt-1" />,
      title: "Jam Kerja",
      content: info.hours,
    },
  ];

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(info.address)}&z=17&output=embed`;


  return (
    <div>
      <PageBanner title={bannerTitle} />

      <section className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Info & Map */}
          <div className="flex flex-col">
            <div className="glass-panel p-8 md:p-12 h-full flex flex-col">
              <SectionTitle title={intro.title} subtitle={intro.subtitle} className="text-left !mb-6" />
              
              <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                          {item.icon}
                          <div>
                              <h3 className="font-bold text-brand-text-light dark:text-white">{item.title}</h3>
                              {item.href ? (
                                  <a href={item.href} className="text-gray-600 dark:text-brand-gray hover:text-brand-yellow transition-colors">{item.content}</a>
                              ) : (
                                  <p className="text-gray-600 dark:text-brand-gray">{item.content}</p>
                              )}
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-8">
                  <h3 className="font-bold text-brand-text-light dark:text-white mb-3">Ikuti Kami</h3>
                  <div className="flex space-x-6">
                      <a href={info.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Yukihana Architecture Studio" className="text-gray-600 dark:text-brand-gray hover:text-brand-yellow transition-colors duration-300">
                        <InstagramIcon className="w-7 h-7" />
                      </a>
                      <a href={info.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Yukihana Architecture Studio" className="text-gray-600 dark:text-brand-gray hover:text-brand-yellow transition-colors duration-300">
                        <FacebookIcon className="w-7 h-7" />
                      </a>
                      <a href={info.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Yukihana Architecture Studio" className="text-gray-600 dark:text-brand-gray hover:text-brand-yellow transition-colors duration-300">
                        <LinkedInIcon className="w-7 h-7" />
                      </a>
                  </div>
              </div>

              <div className="w-full h-80 rounded-2xl overflow-hidden glass-panel p-2 mt-auto pt-8">
                 <iframe
                   src={mapSrc}
                   width="100%"
                   height="100%"
                   className="rounded-xl dark:grayscale-[0.5] dark:invert-[.85]"
                   style={{ border: 0 }}
                   allowFullScreen={true}
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Peta Lokasi Yukihana Architecture Studio"
                 ></iframe>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div>
              <div className="glass-panel p-8 md:p-12 h-full">
                  <h3 className="text-xl md:text-3xl font-bold mb-6 text-brand-text-light dark:text-white">Kirim Pesan Langsung</h3>
                  <p className="text-gray-600 dark:text-brand-gray mb-8">Punya pertanyaan atau ingin memulai proyek? Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Lengkap Anda" required className={inputStyles}/>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Alamat Email Anda" required className={inputStyles}/>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek Pesan" required className={inputStyles}/>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tuliskan pesan Anda di sini..." rows={5} required className={inputStyles}></textarea>
                      <Button type="submit" className="w-full !py-4">Kirim Pesan</Button>
                  </form>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;