import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Article, Author } from '../types';
import { BLOG_ARTICLES as initialArticles, AUTHORS as initialAuthors } from '../constants';

interface BlogContextType {
    articles: Article[];
    authors: Author[];
    addArticle: (article: Omit<Article, 'id'>) => void;
    updateArticle: (article: Article) => void;
    deleteArticle: (articleId: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>(() => {
        try {
            const localData = localStorage.getItem('blogArticles');
            // Check if localData exists and is not an empty array string
            if (localData && localData !== '[]') {
                return JSON.parse(localData);
            }
            // If not, initialize with default articles
            return initialArticles;
        } catch (error) {
            console.error("Could not parse articles from localStorage", error);
            return initialArticles;
        }
    });

    // Authors are static for now, but this structure allows them to be dynamic later
    const [authors, setAuthors] = useState<Author[]>(initialAuthors);

    useEffect(() => {
        try {
            localStorage.setItem('blogArticles', JSON.stringify(articles));
        } catch (error) {
            console.error("Could not save articles to localStorage", error);
        }
    }, [articles]);

    const addArticle = (articleData: Omit<Article, 'id'>) => {
        const newArticle: Article = {
            ...articleData,
            id: articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now(),
        };
        setArticles(prev => [newArticle, ...prev]);
    };

    const updateArticle = (updatedArticle: Article) => {
        setArticles(prev => prev.map(a => a.id === updatedArticle.id ? updatedArticle : a));
    };

    const deleteArticle = (articleId: string) => {
        setArticles(prev => prev.filter(a => a.id !== articleId));
    };

    return (
        <BlogContext.Provider value={{ articles, authors, addArticle, updateArticle, deleteArticle }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    const context = useContext(BlogContext);
    if (context === undefined) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};