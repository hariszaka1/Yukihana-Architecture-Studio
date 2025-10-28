import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback, useLayoutEffect } from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';

interface PageTransitionContextType {
    isTransitioning: boolean;
    transitionTo: (path: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const PageTransitionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetPath, setTargetPath] = useState<string | null>(null);
    const navigate = ReactRouterDOM.useNavigate();
    const location = ReactRouterDOM.useLocation();

    const transitionTo = useCallback((path: string) => {
        // Do not transition if already transitioning or if it's the same path
        if (isTransitioning || location.pathname === path) return;
        setTargetPath(path);
        setIsTransitioning(true);
    }, [isTransitioning, location.pathname]);

    useEffect(() => {
        if (targetPath) {
            // Wait for the exit animation to finish before navigating
            const timer = setTimeout(() => {
                navigate(targetPath);
                setTargetPath(null);
            }, 700); // Must match CSS animation duration (0.7s)
            return () => clearTimeout(timer);
        }
    }, [targetPath, navigate]);

    useLayoutEffect(() => {
        // This hook fires synchronously after DOM mutations when the route changes.
        // It ensures the scroll happens on the new page content before the browser paints it.
        // This is the most reliable place to handle scroll-to-top behavior for this app.
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });

        // We also manage the end of the transition state here.
        setIsTransitioning(false);
    }, [location.pathname]);


    return (
        <PageTransitionContext.Provider value={{ isTransitioning, transitionTo }}>
            {children}
        </PageTransitionContext.Provider>
    );
};

export const usePageTransition = () => {
    const context = useContext(PageTransitionContext);
    if (context === undefined) {
        throw new Error('usePageTransition must be used within a PageTransitionProvider');
    }
    return context;
};