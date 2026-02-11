import React from 'react';
import { Target, BarChart2, Globe, Users } from 'lucide-react';

const ConstructionOperations = () => {
    const points = [
        {
            title: 'Multi-Role Admin Systems',
            description: 'Granular hierarchy-based access control for every stakeholder level.',
            icon: Users
        },
        {
            title: 'Large Project Workflows',
            description: 'Engineered for high-volume, multi-phase construction complexities.',
            icon: Target
        },
        {
            title: 'Centralized Visibility',
            description: 'Single-source-of-truth operational oversight from one command hub.',
            icon: BarChart2
        },
        {
            title: 'Scalable Architecture',
            description: 'Zero-latency management of unlimited sites and contractor databases.',
            icon: Globe
        }
    ];

    return (
        <div className="bg-slate-50 py-24 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-start">
                    <div className="lg:col-span-5 sticky top-10">
                        <h2 className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4">Enterprise Ready</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight">
                            Built for Scale.<br />Built for Speed.
                        </h3>
                        <p className="text-lg text-slate-500 leading-relaxed mb-8 font-light">
                            Our platform is engineered to handle the rigorous demands of the construction industry, providing the stability, security, and scale your enterprise needs.
                        </p>
                        <div className="h-1 w-24 bg-amber-500"></div>
                    </div>
                    <div className="lg:col-span-7 mt-12 lg:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                            {points.map((point, index) => (
                                <div key={index} className="flex flex-col gap-4 group">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 bg-white border border-slate-200 text-slate-900 shadow-sm group-hover:border-amber-400 transition-colors">
                                            <point.icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
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
