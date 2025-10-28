import React from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import AnimatedLink from './AnimatedLink';

interface ButtonOwnProps {
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonOwnProps & (
  (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { to?: never }) |
  (Omit<ReactRouterDOM.LinkProps, 'className' | 'children'> & { to: string })
);

const Button: React.FC<ButtonProps> = ({ to, children, className, ...props }) => {
  const combinedClasses = `glass-button glow-on-hover rounded-lg ${className}`;

  if (to) {
    return (
      <AnimatedLink to={to} className={combinedClasses} {...(props as Omit<ReactRouterDOM.LinkProps, 'to'>)}>
        {children}
      </AnimatedLink>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;