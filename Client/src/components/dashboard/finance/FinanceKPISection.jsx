import React from 'react';
import KpiCard from '../shared/KpiCard';
import { DollarSign, CreditCard, PieChart, Activity, AlertCircle, FileText } from 'lucide-react';

const FinanceKPISection = () => {
    const kpiData = [
        { title: 'Total Budget Allocated', value: '₹ 25.5 Cr', icon: PieChart, trend: 'normal', trendValue: '100%', color: 'bg-blue-50 text-blue-600', trendLabel: 'of total' },
        { title: 'Total Spent (Q3)', value: '₹ 4.2 Cr', icon: Activity, trend: 'up', trendValue: '12%', color: 'bg-indigo-50 text-indigo-600', trendLabel: 'vs last month' },
        { title: 'Remaining Budget', value: '₹ 8.8 Cr', icon: DollarSign, trend: 'down', trendValue: '5%', color: 'bg-emerald-50 text-emerald-600', trendLabel: 'available' },
        { title: 'Pending Payments', value: '₹ 1.2 Cr', icon: CreditCard, trend: 'normal', trendValue: '18 inv', color: 'bg-amber-50 text-amber-600', trendLabel: 'to be processed' },
        { title: 'Overdue Invoices', value: '₹ 45 L', icon: AlertCircle, trend: 'up', trendValue: '4', color: 'bg-red-50 text-red-600', trendLabel: 'urgent attn' },
        { title: 'Vendor Outstanding', value: '₹ 85 L', icon: FileText, trend: 'up', trendValue: '8%', color: 'bg-purple-50 text-purple-600', trendLabel: 'payable' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {kpiData.map((kpi, index) => (
                <KpiCard key={index} {...kpi} />
            ))}
        </div>
    );
};

export default FinanceKPISection;
