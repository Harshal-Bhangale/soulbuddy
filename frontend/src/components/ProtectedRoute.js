import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/UserContext'; // Import the custom hook

/**
 * A component wrapper that protects routes, redirecting unauthenticated users to the login page.
 * Renders the child components (Outlet) only if isLoggedIn is true.
 */
function ProtectedRoute() {
    const { isLoggedIn, loading } = useAuth();

    // If still loading the user state (e.g., checking localStorage), show nothing or a spinner
    if (loading) {
        return <div>Loading user state...</div>;
    }

    // If the user is logged in, render the child route component
    if (isLoggedIn) {
        return <Outlet />;
    }

    // If not logged in, redirect them to the login page
    return <Navigate to="/login" replace />;
}

export default ProtectedRoute;