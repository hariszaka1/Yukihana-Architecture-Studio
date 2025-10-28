

import React, { useState, useEffect } from 'react';
import { usePageTransition } from '../contexts/PageTransitionContext';
import { SnowflakeIcon } from './icons';

const PageTransitionLoader: React.FC = () => {
    const { isTransitioning } = usePageTransition();
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isTransitioning) {
            setAnimationClass('animating-in');
        } else if (animationClass === 'animating-in') {
            // When isTransitioning becomes false, start the out animation
            setAnimationClass('animating-out');
        }
    }, [isTransitioning, animationClass]);

    const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
        // We only care about the animation on the overlay ending.
        if (animationClass === 'animating-out' && e.animationName.includes('circle-wipe-out')) {
            setAnimationClass(''); // Reset and remove from DOM
        }
    };

    if (!animationClass) return null;

    return (
        <div id="page-transition-overlay" className={animationClass} onAnimationEnd={handleAnimationEnd}>
            <div className="logo-container text-white">
                <SnowflakeIcon className="h-20 w-20" />
            </div>
        </div>
    );
};

export default PageTransitionLoader;
