
import React from 'react';

export const ArchitectureIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4a2 2 0 012-2h14a2 2 0 012 2v4M3 10l9-7 9 7M4 10v11h16V10" />
  </svg>
);

export const InteriorIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V10a2 2 0 00-2-2H7a2 2 0 00-2 2v11m14 0h2m-2 0h-4m-2 0H7m2 0H5M12 8V4m0 4h.01" />
  </svg>
);

export const RenovationIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>
);

export const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
);

export const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 6 7.88 5.31 7 5.31A1.69 1.69 0 0 0 5.31 7C5.31 7.88 6 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" /></svg>
);

export const SnowflakeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
            <path d="M50 20 V 80" />
            <path d="M20 50 H 80" />
            <path d="M28.8 28.8 L 71.2 71.2" />
            <path d="M28.8 71.2 L 71.2 28.8" />
            <path d="M38 30 L 62 30" />
            <path d="M38 70 L 62 70" />
            <path d="M30 38 L 30 62" />
            <path d="M70 38 L 70 62" />
        </g>
    </svg>
);

export const LogoIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 500 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50, 50) scale(1)">
            <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
                <path d="M0 -30 V 30" />
                <path d="M-30 0 H 30" />
                <path d="M-21.2 -21.2 L 21.2 21.2" />
                <path d="M-21.2 21.2 L 21.2 -21.2" />
                <path d="M-12 -20 H 12" />
                <path d="M-12 20 H 12" />
                <path d="M-20 -12 V 12" />
                <path d="M20 -12 V 12" />
            </g>
        </g>
        <text x="125" y="42" fontFamily="Helvetica, Arial, sans-serif" fontSize="34" fontWeight="bold" fill="currentColor" alignmentBaseline="middle">YUKIHANA</text>
        <text x="125" y="70" fontFamily="Helvetica, Arial,sans-serif" fontSize="16" fill="currentColor" letterSpacing="1" alignmentBaseline="middle">ARCHITECTURE STUDIO</text>
    </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const CartIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


export const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M16.75,13.96C17,14.26 17.21,14.74 17.1,15.21C17,15.68 16.5,16.15 15.81,16.45C15.12,16.75 14.16,16.84 13.22,16.54C12.28,16.24 11,15.64 9.91,14.54C8.81,13.44 8.21,12.15 7.91,11.21C7.61,10.27 7.7,9.31 8,8.62C8.3,7.93 8.77,7.43 9.24,7.33C9.71,7.23 10.19,7.44 10.49,7.74L10.91,8.16C11.13,8.38 11.22,8.66 11.12,8.93C11.03,9.21 10.87,9.45 10.65,9.67L10.23,10.09C10.13,10.19 10.08,10.31 10.13,10.44C10.18,10.57 10.5,11.11 11.13,11.75C11.91,12.53 12.45,12.82 12.58,12.87C12.71,12.92 12.83,12.87 12.93,12.77L13.35,12.35C13.57,12.13 13.83,11.97 14.13,12.07C14.42,12.17 14.65,12.32 14.87,12.54L15.29,12.96C15.59,13.26 15.8,13.74 15.65,14.21L15.41,14.95C15.2,15.65 15.5,16.34 16.19,16.64C16.88,16.94 17.84,16.85 18.78,16.55C19.72,16.25 20.91,15.64 22,14.54C23.09,13.44 23.69,12.15 23.39,11.21C23.09,10.27 22.9,9.31 22.6,8.62C22.3,7.93 21.83,7.43 21.36,7.33C20.89,7.23 20.41,7.44 20.11,7.74L19.69,8.16C19.47,8.38 19.38,8.66 19.48,8.93C19.57,9.21 19.73,9.45 19.95,9.67L20.37,10.09C20.47,10.19 20.52,10.31 20.47,10.44C20.42,10.57 20.1,11.11 19.47,11.75C18.69,12.53 18.15,12.82 18.02,12.87C17.89,12.92 17.77,12.87 17.67,12.77L17.25,12.35C17.03,12.13 16.77,11.97 16.47,12.07C16.18,12.17 15.95,12.32 15.73,12.54L15.31,12.96C15.01,13.26 14.8,13.74 14.95,14.21L15.19,14.95C15.4,15.65 15.1,16.34 14.41,16.64C13.72,16.94 12.76,16.85 11.82,16.55C10.88,16.25 9.69,15.64 8.59,14.54C7.5,13.44 6.9,12.15 6.6,11.21C6.3,10.27 6.4,9.31 6.7,8.62C7,7.93 7.47,7.43 7.94,7.33C8.41,7.23 8.89,7.44 9.19,7.74L9.61,8.16C9.83,8.38 9.92,8.66 9.82,8.93C9.73,9.21 9.57,9.45 9.35,9.67L8.93,10.09C8.83,10.19 8.78,10.31 8.83,10.44C8.88,10.57 9.2,11.11 9.83,11.75C10.61,12.53 11.15,12.82 11.28,12.87C11.41,12.92 11.53,12.87 11.63,12.77L12.05,12.35C12.27,12.13 12.53,11.97 12.83,12.07C13.12,12.17 13.35,12.32 13.57,12.54L12.69,12.96C12.99,13.26 13.2,13.74 13.05,14.21L12.81,14.95C12.6,15.65 12.9,16.34 13.59,16.64C14.28,16.94 15.24,16.85 16.18,16.55C16.75,16.35 17.22,16.05 17.65,15.65C18.08,15.25 18.41,14.75 18.52,14.18L18.78,13.44C18.88,12.87 18.67,12.39 18.25,12L17.83,11.58C17.61,11.36 17.35,11.2 17.05,11.3C16.76,11.4 16.53,11.55 16.31,11.77L15.89,12.19C15.79,12.29 15.74,12.41 15.79,12.54C15.84,12.67 16.16,13.21 16.79,13.85C17.57,14.63 18.11,14.92 18.24,14.97C18.37,15.02 18.49,14.97 18.59,14.87L19.01,14.45C19.23,14.23 19.49,14.07 19.79,14.17C20.08,14.27 20.31,14.42 20.53,14.64L20.95,15.06C21.25,15.36 21.46,15.84 21.31,16.31L21.07,17.05C20.86,17.75 20.56,18.44 19.87,18.74C19.18,19.04 18.22,19.13 17.28,18.83C16.34,18.53 15.15,17.92 14.06,16.82C12.97,15.72 12.37,14.43 12.07,13.49C11.77,12.55 11.86,11.59 12.16,10.9C12.46,10.21 12.93,9.71 13.4,9.61C13.87,9.51 14.35,9.72 14.65,10.02L15.07,10.44C15.29,10.66 15.38,10.94 15.28,11.21C15.19,11.49 15.03,11.73 14.81,11.95L14.39,12.37C14.29,12.47 14.24,12.59 14.29,12.72C14.34,12.85 14.66,13.39 15.29,14.03C16.07,14.81 16.61,15.1 16.74,15.15C16.87,15.2 16.99,15.15 17.09,15.05L17.51,14.63C17.73,14.41 17.99,14.25 18.29,14.35C18.58,14.45 18.81,14.6 19.03,14.82L19.45,15.24C19.75,15.54 19.96,16.02 19.81,16.49L19.57,17.23C19.36,17.93 19.06,18.62 18.37,18.92C17.68,19.22 16.72,19.13 15.78,18.83C14.84,18.53 13.65,17.92 12.56,16.82C11.47,15.72 10.87,14.43 10.57,13.49C10.27,12.55 10.36,11.59 10.66,10.9C10.96,10.21 11.43,9.71 11.9,9.61C12.37,9.51 12.85,9.72 13.15,10.02L13.57,10.44C13.79,10.66 13.88,10.94 13.78,11.21C13.69,11.49 13.53,11.73 13.31,11.95L12.89,12.37C12.79,12.47 12.74,12.59 12.79,12.72C12.84,12.85 13.16,13.39 13.79,14.03C14.57,14.81 15.11,15.1 15.24,15.15C15.37,15.2 15.49,15.15 15.59,15.05L16.01,14.63C16.23,14.41 16.49,14.25 16.79,14.35C16.94,14.4 17.09,14.47 17.22,14.57C17.52,14.8 17.7,15.17 17.65,15.56C17.59,15.96 17.32,16.32 17,16.54C16.68,16.77 16.29,16.86 15.89,16.82C15.5,16.77 15.13,16.58 14.85,16.29C14.57,16 14.38,15.63 14.33,15.24C14.28,14.85 14.37,14.46 14.59,14.14C14.82,13.82 15.19,13.64 15.58,13.68C15.98,13.73 16.35,13.92 16.63,14.21L16.75,13.96Z"/></svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

export const ConsultationIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

export const DesignConceptIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" />
    </svg>
);

export const RevisionIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M20 20v-5h-5M4 4l16 16" />
    </svg>
);

export const ExecutionIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

export const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const HandoverIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7h2a2 2 0 012 2v10a2 2 0 01-2 2h-2m-6 0H7a2 2 0 01-2-2V9a2 2 0 012-2h2m0-4h2a2 2 0 012 2v2H9V5a2 2 0 012-2zm-2 8h6" />
    </svg>
);

export const CheckmarkCircleIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
);

export const ArrowUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M12 4v16" />
  </svg>
);

export const CalculatorIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h.01M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012 2z" />
  </svg>
);

export const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const StructureIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21V3m14 18V3M3 21h18M3 3h18M3 12h18M12 3v18" />
  </svg>
);

export const ClipboardCheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

export const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const SunIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m1-15h4m-2 2v-4m6 17h4m-2 2v-4M12 2v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42M19 12h2M3 12h2m16-7l-4 4-4-4 4-4 4 4zM9 19l4-4 4 4-4 4-4-4z" />
    </svg>
);