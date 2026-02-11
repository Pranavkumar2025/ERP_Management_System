import React from 'react';

const BudgetOverview = () => {
    const budgets = [
        { project: 'Highway Expansion', allocated: '12.5 Cr', spent: '4.2 Cr', percent: 34, status: 'On Track' },
        { project: 'Metro Station B', allocated: '8.0 Cr', spent: '6.5 Cr', percent: 81, status: 'At Risk' },
        { project: 'City Center Mall', allocated: '15.0 Cr', spent: '2.1 Cr', percent: 14, status: 'On Track' },
        { project: 'Residential Complex', allocated: '5.5 Cr', spent: '1.2 Cr', percent: 22, status: 'On Track' },
    ];

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 h-full">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Project Budget Monitor</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-100">
                            <th className="py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project</th>
                            <th className="py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Budget</th>
                            <th className="py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Used</th>
                            <th className="py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-24 text-center">Utilization</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {budgets.map((item, idx) => (
                            <tr key={idx} className="group hover:bg-slate-50/50">
                                <td className="py-3 text-xs font-bold text-slate-700">{item.project}</td>
                                <td className="py-3 text-xs font-medium text-slate-600 text-right text-mono">₹ {item.allocated}</td>
                                <td className="py-3 text-xs font-medium text-slate-800 text-right text-mono">₹ {item.spent}</td>
                                <td className="py-3 pl-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${item.percent > 80 ? 'bg-red-500' :
                                                    item.percent > 50 ? 'bg-amber-500' :
                                                        'bg-indigo-500'
                                                    }`}
                                                style={{ width: `${item.percent}%` }}
                                            ></div>
                                        </div>
                                        <span className={`text-[9px] font-bold text-right ${item.percent > 80 ? 'text-red-500' : 'text-slate-400'}`}>
                                            {item.percent}%
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button className="w-full mt-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors text-center pt-2">
                Detailed Budget Report
            </button>
        </div>
    );
};

export default BudgetOverview;
