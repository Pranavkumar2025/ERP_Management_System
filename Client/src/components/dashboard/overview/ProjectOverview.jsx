import React from 'react';
import { Briefcase, Calendar, CheckCircle, Clock } from 'lucide-react';

const ProjectOverview = () => {
    const projects = [
        { name: 'City Center Mall', status: 'On Track', progress: 75, deadline: '15 Nov', icon: CheckCircle, color: 'text-emerald-500' },
        { name: 'Highway Expansion', status: 'Delayed', progress: 45, deadline: '30 Oct', icon: Clock, color: 'text-amber-500' },
        { name: 'Sector 5 Residency', status: 'On Track', progress: 20, deadline: '20 Dec', icon: CheckCircle, color: 'text-emerald-500' },
    ];

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-50 rounded-lg">
                        <Briefcase className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-slate-800">Active Projects</h3>
                </div>
                <button className="text-xs font-semibold text-purple-600 hover:text-purple-700">Detailed View &rarr;</button>
            </div>

            <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                        <p className="text-2xl font-bold text-slate-800">12</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Active</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                        <p className="text-2xl font-bold text-emerald-600">8</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">On Schedule</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {projects.map((project, idx) => (
                        <div key={idx} className="space-y-1.5">
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-semibold text-slate-700">{project.name}</span>
                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 ${project.color === 'text-emerald-500' ? 'text-emerald-700 bg-emerald-50' : 'text-amber-700 bg-amber-50'}`}>
                                    {project.status}
                                </span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-1.5">
                                <div
                                    className={`h-1.5 rounded-full ${project.color === 'text-emerald-500' ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-end">
                                <span className="text-[10px] text-slate-400 font-medium flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" /> Due {project.deadline}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview;
