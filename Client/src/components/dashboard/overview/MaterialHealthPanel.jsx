import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Package, AlertTriangle, ArrowRight } from 'lucide-react';

const MaterialHealthPanel = () => {
    const stockTrend = [
        { day: 'Mon', value: 98 },
        { day: 'Tue', value: 95 },
        { day: 'Wed', value: 92 },
        { day: 'Thu', value: 88 },
        { day: 'Fri', value: 85 },
        { day: 'Sat', value: 82 },
        { day: 'Sun', value: 90 }, // Restock
    ];

    const lowStockItems = [
        { name: 'Cement (Grade 43)', site: 'Site A', stock: '12%', status: 'Critical' },
        { name: 'Steel Bars (12mm)', site: 'Site C', stock: '18%', status: 'Low' },
        { name: 'Bricks (Red)', site: 'Site B', stock: '22%', status: 'Low' },
    ];

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-slate-800 font-bold text-lg">Inventory Health</h3>
                    <p className="text-slate-500 text-xs">Stock Utilization & Critical Risks</p>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                    <Package className="h-4 w-4 text-slate-500" />
                </div>
            </div>

            {/* Chart */}
            <div className="h-40 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stockTrend}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                        <YAxis hide domain={[60, 100]} />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 3, fill: '#0ea5e9', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Low Stock List */}
            <div>
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Critical Low Stock</h4>
                <div className="space-y-3">
                    {lowStockItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:bg-white transition-colors">
                            <div className="flex items-center gap-3">
                                <div className={`h-1.5 w-1.5 rounded-full ${item.status === 'Critical' ? 'bg-red-500' : 'bg-amber-500'}`}></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-700 leading-tight">{item.name}</p>
                                    <p className="text-[10px] text-slate-500">{item.site}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`text-xs font-bold ${item.status === 'Critical' ? 'text-red-600' : 'text-amber-600'}`}>{item.stock}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="w-full mt-auto pt-4 flex items-center justify-center text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                View Full Inventory <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </button>
        </div>
    );
};

export default MaterialHealthPanel;
