import React from 'react';
import { Star, MoreHorizontal, ExternalLink } from 'lucide-react';

const SupplierTable = ({ data }) => {
    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden font-sans">
            <div className="px-4 py-3 flex justify-between items-center border-b border-slate-200 bg-slate-50/30">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Supplier Performance</h3>
                <button className="text-[10px] font-bold text-blue-600 hover:underline flex items-center gap-1">
                    All Suppliers <ExternalLink className="h-3 w-3" />
                </button>
            </div>

            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 sticky top-0 z-10">
                        <tr className="border-b border-slate-200">
                            {[
                                { label: 'Supplier Name', width: '35%' },
                                { label: 'On-Time %', width: '15%', align: 'right' },
                                { label: 'Avg Delay', width: '15%', align: 'right' },
                                { label: 'Total Volume', width: '15%', align: 'right' },
                                { label: 'Rating', width: '20%', align: 'right' },
                            ].map((col, idx) => (
                                <th
                                    key={idx}
                                    className={`px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                                    style={{ width: col.width }}
                                >
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {data.map((supplier, index) => (
                            <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                                <td className="px-4 py-2.5">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-700 tracking-tight">{supplier.name}</span>
                                        <span className="text-[10px] text-slate-400 font-medium">{supplier.materialsSupplied}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-2.5 text-right font-mono text-xs font-bold text-slate-700">
                                    {supplier.onTimePercentage}%
                                </td>
                                <td className="px-4 py-2.5 text-right">
                                    <span className={`text-xs font-semibold ${supplier.avgDelay > 0 ? 'text-red-500' : 'text-emerald-600'}`}>
                                        {supplier.avgDelay > 0 ? `+${supplier.avgDelay}d` : '0d'}
                                    </span>
                                </td>
                                <td className="px-4 py-2.5 text-right font-mono text-xs font-medium text-slate-600">
                                    {supplier.totalValue}
                                </td>
                                <td className="px-4 py-2.5 text-right">
                                    <div className="flex items-center justify-end text-amber-400 gap-1">
                                        <span className="text-xs font-bold text-slate-700">{supplier.rating}</span>
                                        <Star className="h-3 w-3 fill-current" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="px-4 py-2 border-t border-slate-200 bg-slate-50/50 text-center">
                <button className="text-[10px] font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wide">
                    View performance report
                </button>
            </div>
        </div>
    );
};

export default SupplierTable;
