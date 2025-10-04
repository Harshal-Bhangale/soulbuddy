import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BirthChartPage from './pages/BirthChartPage';
import DashboardLayout from './components/Dashboard/DashBoardLayout';
import DashboardContent from './components/Dashboard/DashboardContent';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProvider } from './context/UserContext';
import Header from './components/HomePage/Header';
import Footer from './components/HomePage/Footer';

function AppContent() {
  const location = useLocation();

  // Routes that should use DashboardHeader
  const dashboardRoutes = ['/dashboard', '/birthchart'];

  // Determine which header to show
  const isDashboardRoute = dashboardRoutes.some(route => location.pathname.startsWith(route));

  // Hide footer on login, signup, and dashboard
  const hideFooterRoutes = ['/login', '/signup', ...dashboardRoutes];
  const shouldShowFooter = !hideFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-text-primary">
      {/* Header */}
      {!isDashboardRoute ? <Header /> : null}

      <main className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardContent />} />
              <Route path="/birthchart" element={<BirthChartPage />} />
            </Route>
          </Route>
        </Routes>
      </main>

      {/* Footer */}
      {shouldShowFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
}
