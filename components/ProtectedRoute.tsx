import React from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactElement;
    adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminOnly = false }) => {
    const { currentUser } = useAuth();
    const location = ReactRouterDOM.useLocation();

    if (!currentUser) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to. This is a good UX practice.
        return <ReactRouterDOM.Navigate to="/login" state={{ from: location }} replace />;
    }
    
    if (adminOnly && currentUser.username !== 'admin') {
        // If it's an admin-only route and the user is not an admin, redirect to home.
        return <ReactRouterDOM.Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;