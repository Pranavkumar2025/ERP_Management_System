import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-2' : 'bg-white py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <div className="bg-amber-400 p-2 rounded-sm group-hover:bg-amber-500 transition-colors">
                            <HardHat className="h-6 w-6 text-slate-900" />
                        </div>
                        <span className="font-bold text-xl text-slate-900 tracking-tight ml-1">CMP</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4">
                            <Link to="/admin/login">
                                <Button variant="primary" className="px-5 py-2.5 text-sm rounded-sm">
                                    Access Admin Portal
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="border-t border-slate-100 my-4 pt-4 flex flex-col space-y-3">
                            <Link to="/admin/login">
                                <Button variant="primary" className="w-full justify-center">
                                    Access Admin Portal
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
