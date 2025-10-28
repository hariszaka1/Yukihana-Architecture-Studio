import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Message } from '../types';

interface MessageContextType {
    messages: Message[];
    addMessage: (message: Omit<Message, 'id' | 'read'>) => void;
    markAsRead: (messageId: string) => void;
    deleteMessage: (messageId: string) => void;
    unreadCount: number;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

const MESSAGE_STORAGE_KEY = 'ruangKreasiMessages';

const initialMessages: Message[] = [
    {
        id: '1',
        name: 'Budi Santoso',
        email: 'budi.santoso@example.com',
        subject: 'Pertanyaan tentang Paket Renovasi',
        message: 'Halo Yukihana Architecture Studio, saya tertarik dengan layanan renovasi Anda. Bisakah saya mendapatkan informasi lebih detail mengenai apa saja yang termasuk dalam paket renovasi dan bagaimana prosesnya? Terima kasih.',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        read: true,
    },
    {
        id: '2',
        name: 'Citra Lestari',
        email: 'citra.lestari@example.com',
        subject: 'Request Konsultasi Desain Interior',
        message: 'Selamat pagi, saya ingin menjadwalkan sesi konsultasi untuk proyek desain interior apartemen saya di Jakarta. Mohon informasinya mengenai ketersediaan jadwal arsitek Anda. Terima kasih banyak.',
        timestamp: new Date().toISOString(), // now
        read: false,
    }
];

export const MessageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>(() => {
        try {
            const localData = localStorage.getItem(MESSAGE_STORAGE_KEY);
            return localData ? JSON.parse(localData) : initialMessages;
        } catch (error) {
            console.error("Could not parse messages from localStorage", error);
            return initialMessages;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(MESSAGE_STORAGE_KEY, JSON.stringify(messages));
        } catch (error) {
            console.error("Could not save messages to localStorage", error);
        }
    }, [messages]);

    const addMessage = (messageData: Omit<Message, 'id' | 'read'>) => {
        const newMessage: Message = {
            ...messageData,
            id: `msg-${Date.now()}`,
            read: false,
        };
        setMessages(prev => [newMessage, ...prev]);
    };

    const markAsRead = (messageId: string) => {
        setMessages(prev =>
            prev.map(msg =>
                msg.id === messageId ? { ...msg, read: true } : msg
            )
        );
    };

    const deleteMessage = (messageId: string) => {
        setMessages(prev => prev.filter(msg => msg.id !== messageId));
    };

    const unreadCount = messages.filter(msg => !msg.read).length;

    return (
        <MessageContext.Provider value={{ messages, addMessage, markAsRead, deleteMessage, unreadCount }}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessages = () => {
    const context = useContext(MessageContext);
    if (context === undefined) {
        throw new Error('useMessages must be used within a MessageProvider');
    }
    return context;
};