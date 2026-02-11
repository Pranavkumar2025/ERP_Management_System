import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative bg-white pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-sm bg-amber-50 border border-amber-100 text-amber-600 text-sm font-medium mb-6">
                            <span className="flex h-2 w-2 rounded-sm bg-amber-500 mr-2"></span>
                            The #1 Platform for Construction
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Centralized Contractor Management for Construction Teams
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Monitor materials, track project progress, ensure compliance, and manage payments — all from role-specific admin dashboards.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/admin/login" className="w-full sm:w-auto">
                                <Button variant="primary" className="w-full px-8">
                                    Access Admin Portal
                                </Button>
                            </Link>
                            <Button variant="outline" className="w-full sm:w-auto px-8">
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
                        <div className="relative rounded-sm overflow-hidden shadow-2xl border border-slate-200">
                            <img
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                alt="Construction site planning"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>

                        {/* Floating Stats Card - Kept for professional data visualization feel */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-sm shadow-xl border border-slate-100 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="bg-amber-100 p-3 rounded-sm">
                                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">Project Efficiency</p>
                                    <p className="text-xl font-bold text-slate-900">98%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
