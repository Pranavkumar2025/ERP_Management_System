import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MaterialTrendChart = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">Weekly Consumption</h3>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">Cement vs Steel usage trends</p>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-lg">
                    <button className="px-3 py-1 rounded-md bg-white text-xs font-bold text-slate-800 shadow-sm tracking-wide">Weekly</button>
                    <button className="px-3 py-1 rounded-md text-xs font-semibold text-slate-500 hover:text-slate-700 tracking-wide">Monthly</button>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 0,
                            left: -20,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorCement" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorSteel" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                border: '1px solid #f1f5f9',
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                padding: '12px'
                            }}
                            itemStyle={{ fontSize: '12px', fontWeight: 600 }}
                            labelStyle={{ color: '#64748b', marginBottom: '8px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="cement"
                            stroke="#6366f1"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorCement)"
                        />
                        <Area
                            type="monotone"
                            dataKey="steel"
                            stroke="#10b981"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorSteel)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MaterialTrendChart;
