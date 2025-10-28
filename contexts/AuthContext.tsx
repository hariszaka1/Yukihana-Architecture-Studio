import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
    currentUser: User | null;
    users: User[];
    login: (username: string, pass: string) => Promise<boolean>;
    logout: () => void;
    register: (username: string, email: string, fullName: string, pass: string) => Promise<void>;
    updateUserProfile: (updatedData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In a real app, this would be an API call and password would be hashed.
// For this simulation, we store it in memory.
const initialUsers: User[] = []; 
const userPasswords = new Map<string, string>();


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>(initialUsers);

    const login = async (username: string, pass: string): Promise<boolean> => {
        // Hardcoded admin user
        if (username === 'admin' && pass === 'admin') {
            const adminUser: User = { 
                username: 'admin', 
                email: 'admin@ruangkreasi.com',
                fullName: 'Administrator'
            };
            setCurrentUser(adminUser);
            return true;
        }

        // Check registered users
        const userExists = users.find(u => u.username === username);
        const storedPassword = userPasswords.get(username);
        
        if (userExists && storedPassword === pass) {
            setCurrentUser(userExists);
            return true;
        }

        return false;
    };

    const register = async (username: string, email: string, fullName: string, pass:string): Promise<void> => {
        if (users.some(u => u.username === username)) {
            throw new Error('Nama pengguna sudah digunakan.');
        }
        if (username === 'admin') {
            throw new Error('Nama pengguna "admin" tidak diizinkan.');
        }
        const newUser: User = { username, email, fullName };
        setUsers(prev => [...prev, newUser]);
        userPasswords.set(username, pass);
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const updateUserProfile = async (updatedData: Partial<User>): Promise<void> => {
        if (!currentUser) throw new Error("No user is logged in");
        
        // Don't allow username change
        const finalData = { ...updatedData };
        delete finalData.username;

        const updatedUser = { ...currentUser, ...finalData };
        
        setCurrentUser(updatedUser);
        setUsers(prevUsers => prevUsers.map(u => u.username === currentUser.username ? updatedUser : u));
    };

    return (
        <AuthContext.Provider value={{ currentUser, users, login, logout, register, updateUserProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};