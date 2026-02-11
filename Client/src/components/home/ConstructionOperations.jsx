import React from 'react';
import { Target, BarChart2, Globe, Users } from 'lucide-react';

const ConstructionOperations = () => {
    const points = [
        {
            title: 'Multi-Role Admin Systems',
            description: 'Designed for hierarchy-based access control.',
            icon: Users
        },
        {
            title: 'Large Project Workflows',
            description: 'Optimized for complex, multi-phase construction.',
            icon: Target
        },
        {
            title: 'Centralized Visibility',
            description: 'Real-time operational oversight from one hub.',
            icon: BarChart2
        },
        {
            title: 'Scalable Architecture',
            description: 'Manage unlimited sites and contractors.',
            icon: Globe
        }
    ];

    return (
        <div className="bg-white py-24 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-5">
                        <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-3">Enterprise Ready</h2>
                        <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                            Built for Construction Operations
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed mb-8">
                            Our platform is engineered to handle the rigorous demands of the construction industry, providing the stability and scale your enterprise needs.
                        </p>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {points.map((point, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-sm bg-slate-50 border border-slate-100 text-amber-500">
                                            <point.icon className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">{point.title}</h4>
                                        <p className="text-slate-500 text-sm">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionOperations;
