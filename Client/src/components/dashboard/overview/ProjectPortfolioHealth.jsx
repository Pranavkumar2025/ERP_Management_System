import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ProjectPortfolioHealth = () => {
    const data = [
        { name: 'On Track', value: 16, color: '#10b981' }, // Emerald-500
        { name: 'Delayed', value: 6, color: '#f59e0b' },  // Amber-500
        { name: 'At Risk', value: 2, color: '#ef4444' },   // Red-500
    ];

    const highRiskProjects = [
        { name: 'Mall Construction Ph2', issue: 'Material Shortage', impact: '-12% Margin', daysDelayed: 8 },
        { name: 'Highway Block A', issue: 'Labor Strike', impact: 'Timeline Slip', daysDelayed: 5 },
    ];

    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm h-full flex flex-col font-sans">
            <h3 className="text-sm font-semibold text-slate-800 mb-6">Project Portfolio Health</h3>

            <div className="flex items-center gap-8 mb-8">
                {/* Chart Section */}
                <div className="relative h-32 w-32 flex-shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={60}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="none"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', fontSize: '12px' }}
                                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-xl font-bold text-slate-800">24</span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Total</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex-1 space-y-2">
                    {data.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-xs font-medium text-slate-600">{item.name}</span>
                            </div>
                            <span className="text-xs font-bold text-slate-900">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* High Risk Section */}
            <div className="mt-auto">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Top Risk Projects</h4>
                <div className="space-y-0 text-xs">
                    {highRiskProjects.map((project, idx) => (
                        <div key={idx} className="py-2 border-t border-slate-100 first:border-0 flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-slate-800">{project.name}</p>
                                <p className="text-slate-500 mt-0.5">{project.issue}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-rose-600 font-medium block">{project.daysDelayed}d Late</span>
                                <span className="text-slate-400">{project.impact}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPortfolioHealth;
