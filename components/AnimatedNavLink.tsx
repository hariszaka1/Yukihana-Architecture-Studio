import React from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { usePageTransition } from '../contexts/PageTransitionContext';

const AnimatedNavLink: React.FC<ReactRouterDOM.NavLinkProps> = ({ to, onClick, ...props }) => {
    const { transitionTo } = usePageTransition();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) onClick(e);

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

    return <ReactRouterDOM.NavLink to={to} onClick={handleClick} {...props} />;
};

export default AnimatedNavLink;