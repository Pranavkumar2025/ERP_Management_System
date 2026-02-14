import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import KpiDetailView from './KpiDetailView';

const KpiCard = ({ title, value, subValues, trendValue, trendType, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 cursor-pointer transition-all duration-200 group"
    >
        <div className="flex flex-col">
            <h3 className="text-sm font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">{title}</h3>
            <div className="mt-2 flex items-baseline gap-3">
                <span className="text-3xl font-semibold text-slate-900 tracking-tight">{value}</span>
                <div className={`flex items-center gap-0.5 text-xs font-semibold ${trendType === 'positive' ? 'text-emerald-600' :
                    trendType === 'negative' ? 'text-rose-600' : 'text-slate-500'
                    }`}>
                    {trendType === 'positive' ? <ArrowUpRight className="h-3 w-3" /> : trendType === 'negative' ? <ArrowDownRight className="h-3 w-3" /> : null}
                    {trendValue}
                </div>
            </div>
        </div>

        {subValues && (
            <div className="mt-4 flex items-center gap-4 text-xs">
                {subValues.map((sv, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-slate-500">
                        <span className="font-semibold text-slate-700">{sv.val}</span>
                        <span>{sv.label}</span>
                    </div>
                ))}
            </div>
        )}
    </div>
);

const ExecutiveKpiGrid = () => {
    const [selectedKpi, setSelectedKpi] = useState(null);

    const kpiData = [
        // Row 1: High Level
        {
            title: 'Active Projects',
            value: '24',
            trendType: 'positive',
            trendValue: '+2 new',
            subValues: [{ val: '4', label: 'Completed' }, { val: '92%', label: 'On Schedule' }]
        },
        {
            title: 'Total Budget',
            value: '₹ 14.5 Cr',
            trendType: 'positive',
            trendValue: '12% Utilized',
            subValues: [{ val: '₹ 2.1 Cr', label: 'Remaining' }]
        },
        {
            title: 'YTD Revenue',
            value: '₹ 8.2 Cr',
            trendType: 'positive',
            trendValue: '+18% YoY',
            subValues: [{ val: '₹ 1.2 Cr', label: 'This Month' }]
        },
        {
            title: 'Cash Flow',
            value: 'Positive',
            trendType: 'neutral',
            trendValue: 'Stable',
            subValues: [{ val: '32 Days', label: 'Runway' }]
        },

        // Row 2: Operational Health
        {
            title: 'Stock Health',
            value: '94%',
            trendType: 'negative',
            trendValue: '-2%',
            subValues: [{ val: '4', label: 'Low Stock' }]
        },
        {
            title: 'Compliance',
            value: '98/100',
            trendType: 'positive',
            trendValue: 'Optimal',
            subValues: [{ val: '0', label: 'Critical' }]
        },
        {
            title: 'Overdue Payments',
            value: '₹ 12.4 L',
            trendType: 'negative',
            trendValue: 'Needs Attn',
            subValues: [{ val: '3', label: 'Vendors' }]
        },
        {
            title: 'Active Risks',
            value: '2',
            trendType: 'negative',
            trendValue: 'Critical',
            subValues: [{ val: 'Site B', label: 'Safety' }]
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {kpiData.map((kpi, idx) => (
                    <KpiCard
                        key={idx}
                        {...kpi}
                        onClick={() => setSelectedKpi(kpi)}
                    />
                ))}
            </div>

            {selectedKpi && (
                <KpiDetailView
                    title={selectedKpi.title}
                    onClose={() => setSelectedKpi(null)}
                />
            )}
        </>
    );
};

export default ExecutiveKpiGrid;
