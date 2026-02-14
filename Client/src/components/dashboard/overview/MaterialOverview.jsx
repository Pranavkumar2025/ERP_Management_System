import React from 'react';
import { Package, AlertTriangle, ArrowRight, Truck } from 'lucide-react';

const MaterialOverview = () => {
    const materials = [
        { name: 'Portland Cement', stock: '450 Bags', status: 'Optimal', color: 'text-emerald-600 bg-emerald-50' },
        { name: 'TMT Steel Bars', stock: '12 Tons', status: 'Low Stock', color: 'text-amber-600 bg-amber-50' },
        { name: 'Red Bricks', stock: '0 Pcs', status: 'Critical', color: 'text-red-600 bg-red-50' },
    ];

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                        <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-800">Material Status</h3>
                </div>
                <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center">
                    View All <ArrowRight className="h-3 w-3 ml-1" />
                </button>
            </div>

            <div className="p-5 flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-md border border-slate-100 shadow-sm">
                            <AlertTriangle className="h-4 w-4 text-amber-500" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium uppercase">Alerts</p>
                            <p className="text-sm font-bold text-slate-800">2 Critical Items</p>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-slate-200 mx-2"></div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-md border border-slate-100 shadow-sm">
                            <Truck className="h-4 w-4 text-emerald-500" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-medium uppercase">Incoming</p>
                            <p className="text-sm font-bold text-slate-800">3 Deliveries</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 mt-1">
                    {materials.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors"></div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-700">{item.name}</p>
                                    <p className="text-xs text-slate-500">{item.stock}</p>
                                </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.color}`}>
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MaterialOverview;
