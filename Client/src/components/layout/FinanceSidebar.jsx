import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    PieChart,
    FileText,
    CreditCard,
    DollarSign,
    Users,
    FileCheck,
    ClipboardList,
    Settings,
    HelpCircle,
    LogOut,
    X,
    HardHat
} from 'lucide-react';

const FinanceSidebar = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Clear session
        navigate('/admin/login');
    };

    const navigation = [
        { name: 'Dashboard Overview', href: '/dashboard/finance', icon: LayoutDashboard },
        { name: 'Financial Analytics', href: '/dashboard/finance/analytics', icon: PieChart },
        { name: 'Invoices', href: '/dashboard/finance/invoices', icon: FileText },
        { name: 'Payments', href: '/dashboard/finance/payments', icon: CreditCard },
        { name: 'Budgets', href: '/dashboard/finance/budgets', icon: DollarSign },
        { name: 'Vendor Management', href: '/dashboard/finance/vendors', icon: Users },
        { name: 'Financial Reports', href: '/dashboard/finance/reports', icon: ClipboardList },
        { name: 'Audit Logs', href: '/dashboard/finance/audits', icon: FileCheck },
    ];

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
                        <div className="p-1.5 rounded bg-amber-50 border border-amber-100">
                            <HardHat className="h-5 w-5 text-amber-600" />
                        </div>
                        <span className="text-lg font-bold text-slate-900 tracking-tight">CMP<span className="text-amber-600">.</span>Finance</span>
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
                        Finance Menu
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

                    <div className="mt-4 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">System Status</span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium">Finance Module Active</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinanceSidebar;
