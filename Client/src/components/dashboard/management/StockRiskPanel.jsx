import React from 'react';
import { AlertTriangle } from 'lucide-react';

const StockRiskPanel = () => {
    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                    Stock Risks & Alerts
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Critical */}
                <div className="flex flex-col border-l-2 border-red-500 pl-3">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wide mb-0.5">Critical Level</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-800">5 Items</span>
                        <span className="text-xs text-slate-400">Below safety stock</span>
                    </div>
                </div>

                {/* Reorder */}
                <div className="flex flex-col border-l-2 border-amber-400 pl-3">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wide mb-0.5">Reorder Soon</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-800">12 Items</span>
                        <span className="text-xs text-slate-400">Near threshold</span>
                    </div>
                </div>

                {/* Overstock */}
                <div className="flex flex-col border-l-2 border-blue-400 pl-3">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-0.5">Overstocked</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-slate-800">3 Items</span>
                        <span className="text-xs text-slate-400">&gt; 150% capacity</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockRiskPanel;
