import React from 'react';
import { Package, Calendar, ShieldCheck, DollarSign } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            name: 'Real-Time Material Visibility',
            description: 'Monitor inventory levels across multiple sites with precise tracking of orders, usage, and stock depletion.',
            icon: Package,
        },
        {
            name: 'Structured Project Scheduling',
            description: 'Assign tasks, set critical path milestones, and track contractor progress against strict timelines.',
            icon: Calendar,
        },
        {
            name: 'Centralized Compliance Docs',
            description: 'Maintain a unified repository for safety certifications, insurance policies, and regulatory approvals.',
            icon: ShieldCheck,
        },
        {
            name: 'Transparent Financial Oversight',
            description: 'Track project budgets, validate contractor invoices, and maintain a clear audit trail for all payments.',
            icon: DollarSign,
        },
    ];

    return (
        <div className="py-24 bg-white border-b border-slate-100" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3">System Capabilities</h2>
                    <p className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
                        Operational Control & Visibility
                    </p>
                    <p className="mt-4 text-lg text-slate-500 font-light leading-relaxed">
                        A robust suite of management tools designed for maintaining strict oversight of construction operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative bg-white p-8 border border-slate-200 hover:border-amber-400 transition-colors duration-300 group">
                            {/* Sharp corner accent */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-slate-100 group-hover:border-r-amber-400 transition-all duration-300"></div>

                            <div className="flex items-center justify-center h-12 w-12 bg-slate-50 text-slate-700 mb-6 border border-slate-100 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100 transition-colors">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{feature.name}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
