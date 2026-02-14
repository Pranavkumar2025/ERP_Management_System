import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import KpiDetailView from './KpiDetailView';

const KpiCard = ({ title, value, subValues, trendValue, trendType, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white p-5 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all duration-200 group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4 text-slate-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>

        <div className="flex flex-col h-full justify-between">
            <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{title}</h3>
                <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-bold text-slate-900 tracking-tight leading-none">{value}</span>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className={`flex items-center gap-1 text-xs font-semibold ${trendType === 'positive' ? 'text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded' :
                    trendType === 'negative' ? 'text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded' : 'text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded'
                    }`}>
                    {trendType === 'positive' ? <ArrowUpRight className="h-3 w-3" /> : trendType === 'negative' ? <ArrowDownRight className="h-3 w-3" /> : null}
                    {trendValue}
                </div>
                {subValues && (
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                        {subValues.map((sv, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                                <span className="font-medium text-slate-600">{sv.val}</span>
                                <span>{sv.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);

const ExecutiveKpiGrid = () => {
    const [selectedKpi, setSelectedKpi] = useState(null);

    const kpiData = [
        // Row 1
        {
            title: 'Active Projects',
            value: '24',
            trendType: 'positive',
            trendValue: '+2 this month',
            subValues: [{ val: '92%', label: 'On Track' }]
        },
        {
            title: 'Total Budget',
            value: '₹ 14.5 Cr',
            trendType: 'positive',
            trendValue: '12% Utilized',
            subValues: [{ val: '₹ 2.1 Cr', label: 'Remaining' }]
        },
        {
            title: 'Revenue YTD',
            value: '₹ 8.2 Cr',
            trendType: 'positive',
            trendValue: '+18% YoY',
            subValues: [{ val: '₹ 1.2 Cr', label: 'Current' }]
        },
        {
            title: 'Material Value',
            value: '₹ 4.2 Cr',
            trendType: 'negative',
            trendValue: '-5% Stock',
            subValues: [{ val: 'Low', label: 'Cement' }]
        },

        // Row 2
        {
            title: 'Workforce',
            value: '1,240',
            trendType: 'positive',
            trendValue: '+120 Active',
            subValues: [{ val: '98%', label: 'Attendance' }]
        },
        {
            title: 'Compliance Score',
            value: '98/100',
            trendType: 'positive',
            trendValue: 'Optimal',
            subValues: [{ val: '0', label: 'Critical' }]
        },
        {
            title: 'Payables',
            value: '₹ 12.4 L',
            trendType: 'negative',
            trendValue: 'Overdue',
            subValues: [{ val: '3', label: 'Vendors' }]
        },
        {
            title: 'Safety Incidents',
            value: '0',
            trendType: 'neutral',
            trendValue: '30 Days',
            subValues: [{ val: '100%', label: 'Safe' }]
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
