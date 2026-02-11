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
        <div className="py-24 bg-slate-50" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm">System Capabilities</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Operational Control & Visibility
                    </p>
                    <p className="mt-4 text-lg text-slate-600">
                        A robust suite of management tools designed for maintaining strict oversight of construction operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-amber-200 transition-colors duration-300">
                            <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-slate-100 text-slate-700 mb-6 border border-slate-200">
                                <feature.icon className="h-7 w-7" aria-hidden="true" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.name}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
