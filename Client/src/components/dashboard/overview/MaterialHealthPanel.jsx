import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ArrowRight } from 'lucide-react';

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
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full font-sans">
            <h3 className="text-sm font-semibold text-slate-800 mb-6">Inventory Health</h3>

            {/* Chart */}
            <div className="h-40 w-full mb-6 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stockTrend}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                        <YAxis hide domain={[60, 100]} />
                        <Tooltip
                            contentStyle={{ borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', fontSize: '12px' }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Low Stock List */}
            <div className="mt-auto">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Critical Low Stock</h4>
                <div className="space-y-0 divide-y divide-slate-50">
                    {lowStockItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-2 text-xs">
                            <div className="flex items-center gap-2">
                                <div className={`h-1.5 w-1.5 rounded-full ${item.status === 'Critical' ? 'bg-rose-500' : 'bg-amber-500'}`}></div>
                                <div>
                                    <p className="font-semibold text-slate-700">{item.name}</p>
                                    <p className="text-slate-400">{item.site}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold ${item.status === 'Critical' ? 'text-rose-600' : 'text-amber-600'}`}>{item.stock}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="w-full mt-4 flex items-center justify-center text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors pt-2 border-t border-slate-100">
                View Full Inventory <ArrowRight className="h-3 w-3 ml-1" />
            </button>
        </div>
    );
};

export default MaterialHealthPanel;
