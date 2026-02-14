import React from 'react';
import { DollarSign, TrendingUp, CreditCard, ArrowRight } from 'lucide-react';

const FinanceOverview = () => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                        <DollarSign className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-slate-800">Financial Pulse</h3>
                </div>
                <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">Report &rarr;</button>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="bg-indigo-600 rounded-xl p-4 text-white shadow-lg shadow-indigo-200">
                    <p className="text-indigo-100 text-xs font-medium uppercase tracking-wider mb-1">Total Cash Flow</p>
                    <div className="flex items-end gap-2">
                        <h2 className="text-2xl font-bold">₹ 2.4 Cr</h2>
                        <span className="text-xs font-medium bg-indigo-500/50 px-1.5 py-0.5 rounded text-white mb-1 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> +15%
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Outstanding</p>
                        <p className="text-lg font-bold text-slate-800">₹ 45L</p>
                        <p className="text-[10px] text-amber-500 font-medium">Overdue: ₹ 5L</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Expenses</p>
                        <p className="text-lg font-bold text-slate-800">₹ 12.5L</p>
                        <p className="text-[10px] text-emerald-500 font-medium">This Week</p>
                    </div>
                </div>

                <button className="w-full mt-4 flex items-center justify-center p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors">
                    <CreditCard className="h-3.5 w-3.5 mr-2 text-slate-400" />
                    View Pending Invoices
                </button>
            </div>
        </div>
    );
};

export default FinanceOverview;
