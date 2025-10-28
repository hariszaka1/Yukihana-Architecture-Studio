import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface WhatsAppContextType {
    isWhatsAppOpen: boolean;
    setIsWhatsAppOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined);

export const WhatsAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsWhatsAppOpen(true);
        }, 2000); // Delay of 2 seconds for better UX

        return () => clearTimeout(timer);
    }, []); // Empty array ensures this runs only once on mount

    return (
        <WhatsAppContext.Provider value={{ isWhatsAppOpen, setIsWhatsAppOpen }}>
            {children}
        </WhatsAppContext.Provider>
    );
};

export const useWhatsApp = () => {
    const context = useContext(WhatsAppContext);
    if (context === undefined) {
        throw new Error('useWhatsApp must be used within a WhatsAppProvider');
    }
    return context;
};