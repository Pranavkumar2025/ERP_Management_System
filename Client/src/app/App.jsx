import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home';
import AdminLogin from '../pages/auth/AdminLogin';
import ComplianceDashboard from '../pages/dashboards/ComplianceDashboard';
import FinanceDashboard from '../pages/dashboards/FinanceDashboard';
import ManagementDashboard from '../pages/dashboards/ManagementDashboard';
import OverviewDashboard from '../pages/dashboards/OverviewDashboard';
import ProjectDashboard from '../pages/dashboards/ProjectDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </div>
        } />

        {/* Auth Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/overview" element={<OverviewDashboard />} />
        <Route path="/dashboard/management" element={<ManagementDashboard />} />
        <Route path="/dashboard/finance" element={<FinanceDashboard />} />
        <Route path="/dashboard/project" element={<ProjectDashboard />} />
        <Route path="/dashboard/compliance" element={<ComplianceDashboard />} />

      </Routes>
    </Router>
  )
}

export default App