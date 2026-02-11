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
        <div className="py-24 bg-white border-t border-slate-200" id="how-it-works">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3">Process Flow</h2>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 leading-tight">
                        Streamlined Onboarding
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 font-light max-w-2xl mx-auto">
                        Rapid deployment to get your teams operational with minimal downtime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            <div className="bg-white p-8 border border-slate-200 h-full hover:border-amber-400 hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.2)] transition-all duration-300">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center justify-center h-10 w-10 bg-slate-50 border border-slate-100 text-slate-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-600 transition-colors">
                                        <step.icon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <span className="text-5xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors select-none">
                                        {step.id}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{step.name}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connector Arrow for Desktop (except last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-slate-300">
                                    <ArrowRight className="h-6 w-6" />
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
