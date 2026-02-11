import React from 'react';
import { HardHat, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-amber-500 p-1.5 rounded-lg">
                                <HardHat className="h-6 w-6 text-slate-900" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">CMP</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            The professional platform for modern construction management. streamline your operations today.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Features</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Case Studies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Documentation</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Contact Us</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Contractor Management Platform. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
