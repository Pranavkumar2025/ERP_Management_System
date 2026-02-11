import React from 'react';
import { LayoutDashboard, ClipboardList, ShieldCheck, Briefcase } from 'lucide-react';

const RoleBasedDashboards = () => {
    const roles = [
        {
            title: 'Management Admin',
            description: 'Strategic oversight of material inventory, supplier relations, and high-level stock alerts.',
            icon: LayoutDashboard,
        },
        {
            title: 'Project Admin',
            description: 'Execution focus: manage master schedules, critical path tasks, and contractor resource allocation.',
            icon: ClipboardList,
        },
        {
            title: 'Compliance Admin',
            description: 'Risk mitigation: handle safety auditing, certification expiry tracking, and regulatory filings.',
            icon: ShieldCheck,
        },
        {
            title: 'Finance Admin',
            description: 'Cost control: seamless tracking of project budgets, invoice validation, and payment releases.',
            icon: Briefcase,
        },
    ];

    return (
        <div className="bg-slate-50 py-24 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3">Targeted Solutions</h2>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900">
                        Purpose-Built for Every Role
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto font-light leading-relaxed">
                        Eliminate noise. Give your stakeholders exact tooling they need to execute their specific responsibilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200 bg-white shadow-sm divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    {roles.map((role, index) => (
                        <div key={index} className="group relative p-10 hover:bg-slate-50/50 transition-colors duration-300">
                            {/* Top decorative line for active state feeling */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            <div className="w-14 h-14 bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-amber-200 group-hover:shadow-md transition-all">
                                <role.icon className="h-6 w-6 text-slate-700 group-hover:text-amber-600 transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                                {role.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {role.description}
                            </p>

                            <div className="mt-6 flex items-center text-amber-600 font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span>Explore Module</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoleBasedDashboards;
