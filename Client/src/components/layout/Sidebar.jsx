import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    PieChart,
    Briefcase,
    FileCheck,
    HardHat,
    X,
    LogOut,
    Settings,
    HelpCircle,
    FileText,
    AlertTriangle,
    Package,
    BarChart3
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen, role = 'management_admin' }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // In a real app, clear tokens/session here
        // localStorage.removeItem('token');
        navigate('/admin/login');
    };

    // Default Navigation (Operational / Site Manager)
    const defaultNavigation = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Projects', href: '/projects', icon: Briefcase },
        { name: 'Materials', href: '/materials', icon: Package },
        { name: 'Finance', href: '/finance', icon: PieChart },
    ];

    // Management Admin Navigation (Executive View)
    const adminNavigation = [
        { name: 'Overview', href: '/dashboard/overview', icon: LayoutDashboard },
        { name: 'Materials', href: '/dashboard/management', icon: Package },
        { name: 'Projects', href: '/dashboard/projects', icon: Briefcase },
        { name: 'Finance', href: '/dashboard/finance', icon: PieChart },
        { name: 'Compliance', href: '/dashboard/compliance', icon: FileCheck },
        { name: 'Reports', href: '/dashboard/reports', icon: FileText },
    ];

    const navigation = role === 'management_admin' ? adminNavigation : defaultNavigation;

    const bottomNav = [
        { name: 'Settings', href: '/settings', icon: Settings },
        { name: 'Help & Support', href: '/support', icon: HelpCircle },
    ];

    return (
        <>
            {/* Mobile Sidebar Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden bg-slate-900/20 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar Container */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-100 shadow-sm lg:shadow-none transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {/* Brand Section */}
                <div className="flex items-center justify-between h-16 px-6 mb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded bg-amber-50">
                            <HardHat className="h-5 w-5 text-amber-600" />
                        </div>
                        <span className="text-lg font-bold text-slate-900 tracking-tight">CMP<span className="text-amber-500">.</span></span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="lg:hidden text-slate-400 hover:text-slate-600"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-4 space-y-0.5 overflow-y-auto">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">
                        {role === 'management_admin' ? 'Executive View' : 'Main Menu'}
                    </div>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group mb-1 ${isActive
                                    ? 'text-amber-700 bg-amber-50'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon
                                        className={`mr-3 h-4 w-4 transition-colors ${isActive ? 'text-amber-600' : 'text-slate-400 group-hover:text-slate-600'
                                            }`}
                                    />
                                    {item.name}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="p-4 border-t border-slate-50">
                    <div className="space-y-1">
                        {bottomNav.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors group"
                            >
                                <item.icon className="mr-3 h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors group mt-2"
                        >
                            <LogOut className="mr-3 h-4 w-4 text-slate-400 group-hover:text-red-500" />
                            Sign Out
                        </button>
                    </div>

                    {role === 'management_admin' && (
                        <div className="mt-4 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">System Status</span>
                            </div>
                            <p className="text-xs text-slate-600 font-medium">All systems operational</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Sidebar;

