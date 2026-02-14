import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const FinancialOverviewPanel = () => {
    const budgetData = [
        { name: 'Jan', budget: 400, actual: 240 },
        { name: 'Feb', budget: 300, actual: 139 },
        { name: 'Mar', budget: 200, actual: 980 },
        { name: 'Apr', budget: 278, actual: 390 },
        { name: 'May', budget: 189, actual: 480 },
        { name: 'Jun', budget: 239, actual: 380 },
    ];

    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm col-span-1 lg:col-span-2 flex flex-col h-full font-sans">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-sm font-semibold text-slate-800">Financial Performance</h3>
                    <p className="text-xs text-slate-500 mt-1">Budget Allocation vs Actual Spend</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded hover:bg-slate-100 transition-colors">Quarterly</button>
                    <button className="px-3 py-1 text-[10px] font-semibold text-white bg-slate-900 border border-slate-900 rounded shadow-sm">Monthly</button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1">
                {/* Left Chart Area */}
                <div className="xl:col-span-2 flex flex-col">
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={budgetData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={20}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', fontSize: '12px' }}
                                />
                                <Bar dataKey="budget" name="Budget" fill="#e2e8f0" radius={[2, 2, 0, 0]} />
                                <Bar dataKey="actual" name="Actual" fill="#4f46e5" radius={[2, 2, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Right Metrics Area */}
                <div className="flex flex-col gap-6 justify-center">
                    <div className="py-2 border-b border-slate-50">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Outstanding Invoices</span>
                        <div className="flex items-end gap-2 mt-1">
                            <span className="text-2xl font-bold text-slate-800 tracking-tight">₹ 45.2 L</span>
                        </div>
                        <p className="text-xs text-amber-600 mt-1">₹ 5.2 L Overdue (&gt;90 days)</p>
                    </div>

                    <div className="py-2">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Net Profit Margin</span>
                        <div className="flex items-end gap-2 mt-1">
                            <span className="text-2xl font-bold text-slate-800 tracking-tight">18.4%</span>
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                                <ArrowUpRight className="h-3 w-3 mr-0.5" /> 2.4%
                            </span>
                        </div>
                        <div className="h-12 w-full mt-3 opacity-50 grayscale">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={budgetData}>
                                    <Area type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} fillOpacity={0.1} fill="#10b981" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialOverviewPanel;
