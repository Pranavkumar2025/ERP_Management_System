import React, { useState } from 'react';
import FinanceSidebar from './FinanceSidebar';
import { Menu, Bell, Search, Calendar, Download, ChevronDown } from 'lucide-react';

const FinanceLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
            {/* Finance Specific Sidebar */}
            <FinanceSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

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

                        {/* Page Title & Breadcrumb Placeholder */}
                        <div className="hidden md:flex flex-col">
                            <h2 className="text-lg font-bold text-slate-800 tracking-tight">Finance Dashboard</h2>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* Global Filters (Example) */}
                        <div className="hidden md:flex items-center space-x-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            <span className="text-xs text-slate-700 font-medium">Oct 2024</span>
                            <ChevronDown className="h-3 w-3 text-slate-400" />
                        </div>

                        <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block"></div>

                        <button className="relative p-1.5 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </button>

                        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 ml-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs font-bold text-slate-700">Sarah Finance</p>
                                <p className="text-[10px] text-slate-500">Finance Admin</p>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs cursor-pointer hover:ring-2 hover:ring-amber-200 transition-all border border-amber-200">
                                SF
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto focus:outline-none p-4 sm:p-6 scroll-smooth bg-slate-50/50">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default FinanceLayout;
