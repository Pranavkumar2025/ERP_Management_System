import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu, Bell, Search } from 'lucide-react';

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
            {/* Sidebar Component with Role */}
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} role="management_admin" />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* Top Header */}
                <header className="bg-white/90 backdrop-blur-sm border-b border-slate-100 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 shrink-0">
                    <div className="flex items-center flex-1">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 -ml-2 mr-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none lg:hidden transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Search Bar - Modern & Minimal */}
                        <div className="hidden md:flex max-w-sm w-full ml-4 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-9 pr-3 py-2 border-none rounded-lg leading-5 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 sm:text-sm transition-all hover:bg-slate-50"
                                placeholder="Search..."
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative p-1.5 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </button>

                        <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs cursor-pointer hover:ring-2 hover:ring-amber-200 transition-all">
                            AU
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto focus:outline-none p-4 sm:p-6 scroll-smooth">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
