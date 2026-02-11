import React from 'react';
import { UserPlus, LayoutDashboard, CheckSquare, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: '01',
            name: 'System Access',
            description: 'Secure, role-based login for all stakeholders.',
            icon: UserPlus,
        },
        {
            id: '02',
            name: 'Dashboard Selection',
            description: 'Auto-routing to your specific administrative interface.',
            icon: LayoutDashboard,
        },
        {
            id: '03',
            name: 'Operational Execution',
            description: 'Manage tasks, approvals, and reporting immediately.',
            icon: CheckSquare,
        },
    ];

    return (
        <div className="py-24 bg-white border-t border-slate-100" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Process Flow</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Streamlined Onboarding
                    </p>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Rapid deployment to get your teams operational with minimal downtime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            <div className="bg-slate-50 rounded-sm p-8 border border-slate-200 h-full hover:border-amber-300 transition-colors duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-white border border-slate-200 text-slate-700 shadow-sm group-hover:text-amber-600 group-hover:border-amber-200 transition-colors">
                                        <step.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <span className="text-4xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors select-none">
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.name}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Arrow for Desktop (except last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                    <ArrowRight className="h-6 w-6 text-slate-300" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
