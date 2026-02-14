import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';
import { DollarSign, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

const FinancialOverviewPanel = () => {
    const budgetData = [
        { name: 'Jan', budget: 400, actual: 240 },
        { name: 'Feb', budget: 300, actual: 139 },
        { name: 'Mar', budget: 200, actual: 980 }, // Outlier for vis
        { name: 'Apr', budget: 278, actual: 390 },
        { name: 'May', budget: 189, actual: 480 },
        { name: 'Jun', budget: 239, actual: 380 },
    ];

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm col-span-1 lg:col-span-2 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-slate-800 font-bold text-lg">Financial Performance</h3>
                    <p className="text-slate-500 text-xs">Budget vs Actual & Cash Flow</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">Quarterly</button>
                    <button className="px-3 py-1.5 text-xs font-bold text-white bg-slate-900 border border-slate-900 rounded-lg shadow-sm">Monthly</button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1">
                {/* Left Chart Area */}
                <div className="xl:col-span-2 flex flex-col">
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={budgetData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={12}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                />
                                <Bar dataKey="budget" name="Budget Allocated" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="actual" name="Actual Spend" fill="#6366f1" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-slate-300"></div>
                            <span className="text-xs font-medium text-slate-500">Allocated Budget</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-sm bg-indigo-500"></div>
                            <span className="text-xs font-medium text-slate-500">Actual Spend</span>
                        </div>
                    </div>
                </div>

                {/* Right Metrics Area */}
                <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Outstanding Invoices</span>
                            <div className="p-1.5 bg-white rounded-md border border-slate-100">
                                <DollarSign className="h-4 w-4 text-slate-400" />
                            </div>
                        </div>
                        <div className="flex items-end gap-2 mb-1">
                            <span className="text-2xl font-bold text-slate-800">₹ 45.2 L</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                            ₹ 5.2 L Overdue (>90 days)
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex-1 flex flex-col justify-between">
                        <div>
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Net Profit Margin</span>
                            <div className="flex items-end gap-2 mt-1">
                                <span className="text-2xl font-bold text-slate-800">18.4%</span>
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center mb-1">
                                    <ArrowUpRight className="h-3 w-3 mr-0.5" /> +2.4%
                                </span>
                            </div>
                        </div>
                        <div className="h-16 w-full mt-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={budgetData}>
                                    <defs>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorPv)" />
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
