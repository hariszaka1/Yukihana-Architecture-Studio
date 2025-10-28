import React from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { usePageTransition } from '../contexts/PageTransitionContext';

const AnimatedLink: React.FC<ReactRouterDOM.LinkProps> = ({ to, onClick, ...props }) => {
    const { transitionTo } = usePageTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) onClick(e);

        // Handle special cases: middle click, ctrl/cmd click, etc. for opening in new tab
        if (
            e.ctrlKey ||
            e.metaKey ||
            e.altKey ||
            e.shiftKey ||
            e.button > 0
        ) {
            return;
        }

        e.preventDefault();
        transitionTo(to.toString());
    };

    return <ReactRouterDOM.Link to={to} onClick={handleClick} {...props} />;
};

export default AnimatedLink;