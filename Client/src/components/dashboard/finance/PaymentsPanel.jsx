import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, CheckCircle, Clock } from 'lucide-react';

const PaymentsPanel = () => {
    // Mock Data
    const recentPayments = [
        { id: 'TXN-9821', vendor: 'UltraTech Cement', date: 'Oct 24', amount: '₹ 4.5 L', status: 'Completed' },
        { id: 'TXN-9822', vendor: 'Tata Steel', date: 'Oct 23', amount: '₹ 12.2 L', status: 'Processing' },
        { id: 'TXN-9823', vendor: 'L&T Construction', date: 'Oct 22', amount: '₹ 8.7 L', status: 'Completed' },
        { id: 'TXN-9824', vendor: 'Asian Paints', date: 'Oct 21', amount: '₹ 1.5 L', status: 'Completed' },
    ];

    const chartData = [
        { name: 'Aug', amount: 45 },
        { name: 'Sep', amount: 52 },
        { name: 'Oct', amount: 38 }, // Current partial
    ];

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 h-full flex flex-col overflow-hidden">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-between">
                <span>Payments Overview</span>
                <span className="text-xs font-normal text-slate-500 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">Last 30 Days</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">

                {/* Recent Payments List */}
                <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recent Transactions</p>
                    {recentPayments.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-full ${payment.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                    {payment.status === 'Completed' ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-800">{payment.vendor}</h4>
                                    <p className="text-xs text-slate-500 font-mono">{payment.id} • {payment.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-sm font-bold text-slate-900">{payment.amount}</span>
                                <span className="text-[10px] text-slate-400">{payment.status}</span>
                            </div>
                        </div>
                    ))}
                    <button className="w-full py-2 text-xs font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center justify-center gap-1">
                        View All History <ArrowUpRight className="h-3 w-3" />
                    </button>
                </div>

                {/* Monthly Trend Chart */}
                <div className="flex flex-col">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Payment Trend (₹ Lacs)</p>
                    <div className="flex-1 min-h-[150px] bg-slate-50 rounded-lg border border-slate-100 p-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    itemStyle={{ fontSize: '12px', color: '#1e293b', fontWeight: 'bold' }}
                                    cursor={{ fill: '#f1f5f9' }}
                                />
                                <Bar dataKey="amount" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                        <span>Avg. Monthly: <span className="font-semibold text-slate-700">₹ 45L</span></span>
                        <span className="text-emerald-600 font-medium">+5% vs last year</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentsPanel;
