import React from 'react';
import { PhoneIcon, CloseIcon } from './icons';
import { useWhatsApp } from '../contexts/WhatsAppContext';

const WhatsAppPopup: React.FC = () => {
  const { isWhatsAppOpen: isOpen, setIsWhatsAppOpen: setIsOpen } = useWhatsApp();

  return (
    <>
      {/* Backdrop for the mobile bottom sheet */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] sm:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div className="relative flex flex-col items-end">
        {/* The Popup Panel */}
        <div
          className={`
            fixed bottom-0 left-0 right-0 w-full z-[100] transition-transform duration-300 ease-out
            sm:absolute sm:bottom-full sm:right-0 sm:left-auto sm:w-80 sm:mb-4 sm:transition-all sm:z-auto
            ${
              isOpen
                ? 'translate-y-0 sm:opacity-100 sm:translate-y-0'
                : 'translate-y-full sm:opacity-0 sm:translate-y-4 sm:pointer-events-none'
            }`
          }
        >
          <div className="bg-brand-light dark:bg-brand-accent-dark rounded-t-2xl sm:glass-panel sm:rounded-2xl">
            {/* Header */}
            <div className="bg-whatsapp-green text-white p-4 rounded-t-2xl sm:rounded-t-xl flex justify-between items-center">
              <h3 className="font-bold text-lg">Chat dengan Kami</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-black/20 rounded-full p-1 transition-colors"
                aria-label="Tutup chat"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            {/* Body */}
            <div className="p-5">
              <p className="leading-relaxed text-brand-text-light dark:text-white">
                Halo! 👋<br />
                Selamat datang di Yukihana Architecture Studio. Ada yang bisa kami bantu?
              </p>
            </div>
            {/* CTA */}
            <div className="p-5 pt-0">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Yukihana%20Architecture%20Studio,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20proyek%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-whatsapp-green text-white px-6 py-3 rounded-full font-semibold hover:bg-whatsapp-green-dark transition-colors duration-300"
              >
                Mulai Chat
              </a>
            </div>
          </div>
        </div>

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[95] w-16 h-16 bg-whatsapp-green rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:bg-whatsapp-green-dark hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp-green"
          aria-label="Buka chat WhatsApp"
        >
          <PhoneIcon className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppPopup;