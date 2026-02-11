import React from 'react';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

const KpiCard = ({ title, value, trend, trendValue, trendLabel }) => {
    // Trend Logic
    const isPositive = trend === 'up';
    const isNegative = trend === 'down';

    return (
        <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm flex flex-col justify-between h-full hover:border-slate-300 transition-colors">
            <div>
                <h3 className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1">{title}</h3>
                <div className="text-2xl font-bold text-slate-800 tracking-tight">{value}</div>
            </div>

            <div className="mt-4 flex items-center">
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-sm flex items-center ${isPositive ? 'text-emerald-700 bg-emerald-50' :
                        isNegative ? 'text-red-700 bg-red-50' :
                            'text-slate-600 bg-slate-50'
                    }`}>
                    {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : isNegative ? <ArrowDown className="h-3 w-3 mr-1" /> : <Minus className="h-3 w-3 mr-1" />}
                    {trendValue}
                </span>
                <span className="text-[10px] text-slate-400 font-medium ml-2 uppercase tracking-wide">{trendLabel || 'vs last period'}</span>
            </div>
        </div>
    );
};

export default KpiCard;
