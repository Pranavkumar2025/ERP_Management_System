import React from 'react';
import { LayoutDashboard, ClipboardList, ShieldCheck, Briefcase } from 'lucide-react';

const RoleBasedDashboards = () => {
    const roles = [
        {
            title: 'Management Admin',
            description: 'Controls material inventory, suppliers, and stock alerts.',
            icon: LayoutDashboard,
        },
        {
            title: 'Project Admin',
            description: 'Manages schedules, tasks, and contractor assignments.',
            icon: ClipboardList,
        },
        {
            title: 'Compliance Admin',
            description: 'Handles safety documents, certifications, and approvals.',
            icon: ShieldCheck,
        },
        {
            title: 'Finance Admin',
            description: 'Tracks budgets, invoices, and payments.',
            icon: Briefcase,
        },
    ];

    return (
        <div className="bg-slate-50 py-20 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Targeted Solutions</h2>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                        Role-Based Dashboards
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
                        Specialized tools for every key stakeholder in your construction projects.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {roles.map((role, index) => (
                        <div key={index} className="bg-white rounded-sm p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="w-12 h-12 bg-slate-100 rounded-sm flex items-center justify-center mb-4">
                                <role.icon className="h-6 w-6 text-slate-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {role.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {role.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoleBasedDashboards;
