import React from 'react';

const FinancialSummaryCard = () => {
    const metrics = [
        { label: 'Total Inventory Value', value: '₹ 24,50,000', color: 'text-slate-800' },
        { label: 'Material Cost (Week)', value: '₹ 1,85,000', color: 'text-slate-800' },
        { label: 'Pending PO Value', value: '₹ 4,20,000', color: 'text-slate-800' },
        { label: 'Wastage Rate', value: '2.4%', color: 'text-red-600' },
    ];

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-5 h-full flex flex-col">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Financial Overview</h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-2 flex-1">
                {metrics.map((metric, index) => (
                    <div key={index} className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">{metric.label}</span>
                        <div className={`text-base font-bold tracking-tight ${metric.color}`}>{metric.value}</div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-50">
                <button className="text-[10px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors uppercase tracking-wide">
                    View Report &rarr;
                </button>
            </div>
        </div>
    );
};

export default FinancialSummaryCard;
