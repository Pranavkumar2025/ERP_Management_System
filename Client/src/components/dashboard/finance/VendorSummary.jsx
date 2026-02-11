import React from 'react';
import { AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';

const VendorSummary = () => {
    const vendors = [
        { name: 'UltraTech Cement', contracts: 3, pending: '₹ 4.5 L', reliability: 98, risk: 'Low' },
        { name: 'Tata Steel Ltd', contracts: 2, pending: '₹ 12.2 L', reliability: 95, risk: 'Low' },
        { name: 'Local Sand Supply', contracts: 5, pending: '₹ 85 K', reliability: 82, risk: 'Medium' },
    ];

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4 h-full">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Top Vendor Status</h3>
            <div className="space-y-3">
                {vendors.map((vendor, i) => (
                    <div key={i} className="flex flex-col p-3 rounded-lg border border-slate-100 hover:border-slate-300 transition-colors bg-slate-50/50">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xs font-bold text-slate-800">{vendor.name}</h4>
                            {vendor.risk === 'Low' ?
                                <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Safe</span> :
                                <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center gap-1"><ShieldAlert className="h-3 w-3" /> Medium Risk</span>
                            }
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500">
                            <div>
                                <span className="block text-xs font-semibold text-slate-700">{vendor.pending}</span>
                                <span>Pending Payment</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs font-semibold text-slate-700">{vendor.reliability}%</span>
                                <span>Reliability Score</span>
                            </div>
                        </div>
                        <div className="w-full bg-slate-200 h-1 mt-2 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${vendor.risk === 'Low' ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${vendor.reliability}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-4 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors text-center border-t border-slate-100 pt-3">
                View All Vendors
            </button>
        </div>
    );
};

export default VendorSummary;
