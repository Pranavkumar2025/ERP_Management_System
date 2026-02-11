import React from 'react';
import HeroSection from '../components/home/HeroSection';
import RoleBasedDashboards from '../components/home/RoleBasedDashboards';
import FeaturesSection from '../components/home/FeaturesSection';
import ConstructionOperations from '../components/home/ConstructionOperations';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <RoleBasedDashboards />
            <FeaturesSection />
            <ConstructionOperations />
            <HowItWorks />
            <Testimonials />
        </div>
    );
};

export default Home;
