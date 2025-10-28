import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useProjects } from './ProjectContext';
import { useProducts } from './ProductContext';
import { useBlog } from './BlogContext';
import { useContent } from './ContentContext';

interface AssetContextType {
    assets: string[];
    addAsset: (url: string) => void;
    deleteAsset: (url: string) => void;
    collectAllImageUrls: () => string[];
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

const ASSET_STORAGE_KEY = 'yukihanaAssets';

// Helper function to scan content object recursively for image URLs
const findImageUrls = (obj: any, urls: Set<string>) => {
    if (!obj) return;
    if (typeof obj === 'string' && (obj.startsWith('/assets/') || obj.startsWith('data:image'))) {
        urls.add(obj);
    } else if (Array.isArray(obj)) {
        obj.forEach(item => findImageUrls(item, urls));
    } else if (typeof obj === 'object' && obj !== null) {
        Object.values(obj).forEach(value => findImageUrls(value, urls));
    }
};

export const AssetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { projects } = useProjects();
    const { products } = useProducts();
    const { articles } = useBlog();
    const { content } = useContent();
    
    const [assets, setAssets] = useState<string[]>(() => {
        try {
            const localData = localStorage.getItem(ASSET_STORAGE_KEY);
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Could not parse assets from localStorage", error);
            return [];
        }
    });

    const collectAllImageUrls = (): string[] => {
        const urls = new Set<string>();
        
        projects.forEach(p => {
            if (p.mainImage) urls.add(p.mainImage);
            p.gallery.forEach(g => { if(g) urls.add(g) });
        });

        products.forEach(p => { if (p.image) urls.add(p.image) });

        articles.forEach(a => {
            if (a.mainImage) urls.add(a.mainImage);
            a.content.forEach(c => {
                if (c.type === 'image' && c.src) urls.add(c.src);
            });
        });

        findImageUrls(content, urls);
        
        return Array.from(urls);
    };

    // This effect runs once on mount to initialize or update the asset list
    // by scanning all content sources.
    useEffect(() => {
        const scannedUrls = new Set(collectAllImageUrls());
        const existingUrls = new Set(assets);
        
        // Add any newly found URLs from content to our asset list
        scannedUrls.forEach(url => existingUrls.add(url));
        
        const sortedAssets = Array.from(existingUrls).sort();

        // Only update state if there's a change to prevent re-renders
        if (JSON.stringify(sortedAssets) !== JSON.stringify(assets)) {
             setAssets(sortedAssets);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projects, products, articles, content]);

    useEffect(() => {
        try {
            localStorage.setItem(ASSET_STORAGE_KEY, JSON.stringify(assets));
        } catch (error) {
            console.error("Could not save assets to localStorage", error);
        }
    }, [assets]);

    const addAsset = (url: string) => {
        setAssets(prevAssets => {
            const newAssets = new Set(prevAssets);
            newAssets.add(url);
            return Array.from(newAssets).sort();
        });
    };

    const deleteAsset = (url: string) => {
        setAssets(prevAssets => prevAssets.filter(asset => asset !== url));
    };

    return (
        <AssetContext.Provider value={{ assets, addAsset, deleteAsset, collectAllImageUrls }}>
            {children}
        </AssetContext.Provider>
    );
};

export const useAssets = () => {
    const context = useContext(AssetContext);
    if (context === undefined) {
        throw new Error('useAssets must be used within an AssetProvider');
    }
    return context;
};
