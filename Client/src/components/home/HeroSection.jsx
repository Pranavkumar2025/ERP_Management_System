import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative bg-white pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-100">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 bg-amber-500 mr-2"></span>
                            Enterprise Construction OS
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Command Your <br className="hidden lg:block" />
                            <span className="text-slate-900 relative">
                                Projects
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-amber-400/30 -z-10"></span>
                            </span>
                            <span className="text-slate-400 font-light"> & People.</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            The centralized operating system for modern construction. Monitor materials, compliance, and capital with military-grade precision.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/admin/login" className="w-full sm:w-auto">
                                <Button variant="primary" className="w-full px-8 py-4 rounded-none h-auto text-sm font-bold tracking-wide uppercase border-2 border-amber-500 bg-amber-500 hover:bg-amber-600 hover:border-amber-600 shadow-none transition-all">
                                    Launch Platform
                                </Button>
                            </Link>
                            <Button variant="outline" className="w-full sm:w-auto px-8 py-4 rounded-none h-auto text-sm font-bold tracking-wide uppercase border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-900 transition-all">
                                System Tour
                            </Button>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400 grayscale opacity-70">
                            {/* Simple placeholders for "Trusted By" logos to add enterprise authority */}
                            <div className="h-6 w-20 bg-slate-200/50"></div>
                            <div className="h-8 w-24 bg-slate-200/50"></div>
                            <div className="h-5 w-16 bg-slate-200/50"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
                        <div className="relative overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                            {/* Technical border frame */}
                            <div className="absolute top-0 left-0 w-full h-full border border-slate-100 pointer-events-none z-10 m-2"></div>
                            <img
                                className="w-full h-auto object-cover filter contrast-[1.05]"
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" // More "industrial" image
                                alt="Construction site command center"
                            />
                        </div>

                        {/* Floating Stats Card - Sharp and Technical */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 hidden md:block max-w-xs">
                            <div className="flex items-start gap-4">
                                <div className="bg-slate-900 p-3 text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Live Efficiency</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-3xl font-bold text-slate-900 tracking-tight">98.4%</p>
                                        <span className="text-xs font-bold text-emerald-600 flex items-center">
                                            ▲ 2.1%
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-2 font-mono">UPDATED: JUST NOW</p>
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
