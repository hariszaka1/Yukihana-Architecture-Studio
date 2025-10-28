import React from 'react';
import { Message } from '../types';
import Button from './Button';
import { CloseIcon, EmailIcon, PhoneIcon } from './icons';

interface MessageDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: (messageId: string) => void;
    message: Message | null;
}

const MessageDetailModal: React.FC<MessageDetailModalProps> = ({ isOpen, onClose, onDelete, message }) => {
    if (!isOpen || !message) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-modal-title"
        >
            <div className="glass-panel w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl shadow-2xl relative">
                <div className="p-6 border-b border-black/10 dark:border-white/20">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 id="message-modal-title" className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white">
                                {message.subject}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-brand-gray mt-1">
                                Dari: <a href={`mailto:${message.email}`} className="text-brand-yellow hover:underline">{message.name}</a>
                            </p>
                        </div>
                        <button onClick={onClose} className="text-brand-text-light dark:text-white hover:text-brand-yellow p-1" aria-label="Tutup modal">
                            <CloseIcon className="w-7 h-7" />
                        </button>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto flex-grow">
                    <p className="whitespace-pre-wrap text-gray-600 dark:text-brand-gray leading-relaxed">
                        {message.message}
                    </p>
                </div>

                <div className="p-6 border-t border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 rounded-b-xl">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                            <p><strong>Email:</strong> {message.email}</p>
                            <p><strong>Diterima:</strong> {new Date(message.timestamp).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' })}</p>
                        </div>
                        <div className="flex gap-4">
                             <Button
                                onClick={() => onDelete(message.id)}
                                className="bg-red-500/20 !text-red-500 hover:bg-red-500/30 !px-4 !py-2 text-sm"
                            >
                                Hapus
                            </Button>
                            <Button onClick={onClose} className="bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 !px-4 !py-2 text-sm">
                                Tutup
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDetailModal;