import React from 'react';
import { Briefcase, DollarSign, TrendingUp, Activity, Package, AlertTriangle, FileCheck, Clock, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const KpiCard = ({ title, value, subValues, trend, trendValue, icon: Icon, colorClass, trendType }) => (
    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)] transition-all duration-200">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-2.5 rounded-lg ${colorClass.replace('text-', 'bg-').replace('600', '50')} border border-slate-100`}>
                <Icon className={`h-5 w-5 ${colorClass}`} />
            </div>
            <div className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border ${trendType === 'positive' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                    trendType === 'negative' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-slate-50 text-slate-600 border-slate-100'
                }`}>
                {trendType === 'positive' ? <ArrowUpRight className="h-3 w-3" /> : trendType === 'negative' ? <ArrowDownRight className="h-3 w-3" /> : null}
                {trendValue}
            </div>
        </div>

        <div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{value}</h3>
        </div>

        {subValues && (
            <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-3">
                {subValues.map((sv, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                        <span className="text-xs text-slate-500">
                            <span className="font-semibold text-slate-700">{sv.val}</span> {sv.label}
                        </span>
                    </div>
                ))}
            </div>
        )}
    </div>
);

const ExecutiveKpiGrid = () => {
    const kpiData = [
        // Row 1: High Level
        {
            title: 'Active Projects',
            value: '24',
            trendType: 'positive',
            trendValue: '+2 new',
            icon: Briefcase,
            colorClass: 'text-blue-600',
            subValues: [{ val: '4', label: 'Completed' }, { val: '92%', label: 'On Schedule' }]
        },
        {
            title: 'Total Budget',
            value: '₹ 14.5 Cr',
            trendType: 'positive',
            trendValue: '12% Utilized',
            icon: DollarSign,
            colorClass: 'text-indigo-600',
            subValues: [{ val: '₹ 2.1 Cr', label: 'Remaining' }]
        },
        {
            title: 'YTD Revenue',
            value: '₹ 8.2 Cr',
            trendType: 'positive',
            trendValue: '+18% YoY',
            icon: TrendingUp,
            colorClass: 'text-emerald-600',
            subValues: [{ val: '₹ 1.2 Cr', label: 'This Month' }]
        },
        {
            title: 'Cash Flow',
            value: 'Positive',
            trendType: 'neutral',
            trendValue: 'Stable',
            icon: Activity,
            colorClass: 'text-cyan-600',
            subValues: [{ val: '32 Days', label: 'Runway' }]
        },

        // Row 2: Operational Health
        {
            title: 'Stock Health',
            value: '94%',
            trendType: 'negative',
            trendValue: '-2% vs last',
            icon: Package,
            colorClass: 'text-amber-600',
            subValues: [{ val: '4', label: 'Low Stock Items' }]
        },
        {
            title: 'Compliance',
            value: '98/100',
            trendType: 'positive',
            trendValue: 'Optimal',
            icon: FileCheck,
            colorClass: 'text-purple-600',
            subValues: [{ val: '0', label: 'Critical Issues' }]
        },
        {
            title: 'Overdue',
            value: '₹ 12.4 L',
            trendType: 'negative',
            trendValue: 'Needs Attn',
            icon: Clock,
            colorClass: 'text-rose-600',
            subValues: [{ val: '3', label: 'Vendors Affected' }]
        },
        {
            title: 'Risk Alerts',
            value: '2 Critical',
            trendType: 'negative',
            trendValue: 'High Priority',
            icon: AlertTriangle,
            colorClass: 'text-orange-600',
            subValues: [{ val: 'Site B', label: 'Safety Incident' }]
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpiData.map((kpi, idx) => (
                <KpiCard key={idx} {...kpi} />
            ))}
        </div>
    );
};

export default ExecutiveKpiGrid;
