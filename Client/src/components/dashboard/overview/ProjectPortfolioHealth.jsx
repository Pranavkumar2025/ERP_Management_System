import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const ProjectPortfolioHealth = () => {
    const data = [
        { name: 'On Track', value: 16, color: '#10b981' }, // Emerald-500
        { name: 'Detailed', value: 6, color: '#f59e0b' },  // Amber-500
        { name: 'At Risk', value: 2, color: '#ef4444' },   // Red-500
    ];

    const highRiskProjects = [
        { name: 'Mall Construction Ph2', issue: 'Material Shortage', impact: '-12% Margin', daysDelayed: 8 },
        { name: 'Highway Block A', issue: 'Labor Strike', impact: 'Timeline Slip', daysDelayed: 5 },
    ];

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
            <h3 className="text-slate-800 font-bold text-lg mb-1">Project Portfolio Health</h3>
            <p className="text-slate-500 text-xs mb-6">Status of 24 Active Projects</p>

            <div className="flex flex-col xl:flex-row items-center gap-8 flex-1">
                {/* Chart Section */}
                <div className="relative h-48 w-48 flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-3xl font-bold text-slate-800">24</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total</span>
                    </div>
                </div>

                {/* Legend & Stats */}
                <div className="flex-1 w-full space-y-3">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50/50 border border-emerald-100">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-xs font-bold text-slate-700">On Track</span>
                        </div>
                        <span className="text-xs font-bold text-slate-900">16</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-amber-50/50 border border-amber-100">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                            <span className="text-xs font-bold text-slate-700">Delayed</span>
                        </div>
                        <span className="text-xs font-bold text-slate-900">6</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-red-50/50 border border-red-100">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500"></div>
                            <span className="text-xs font-bold text-slate-700">At Risk</span>
                        </div>
                        <span className="text-xs font-bold text-slate-900">2</span>
                    </div>
                </div>
            </div>

            {/* High Risk Section */}
            <div className="mt-8">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Top Risk Projects</h4>
                <div className="space-y-3">
                    {highRiskProjects.map((project, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-red-100 bg-red-50/30">
                            <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h5 className="text-sm font-bold text-slate-800">{project.name}</h5>
                                    <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">{project.daysDelayed}d Late</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    <span className="font-semibold text-slate-600">{project.issue}</span> • <span className="text-red-600 font-medium">{project.impact}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPortfolioHealth;
