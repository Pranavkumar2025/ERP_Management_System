import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ExecutiveKpiGrid from '../../components/dashboard/overview/ExecutiveKpiGrid';
import RiskAlertBanner from '../../components/dashboard/overview/RiskAlertBanner';
import ProjectPortfolioHealth from '../../components/dashboard/overview/ProjectPortfolioHealth';
import FinancialOverviewPanel from '../../components/dashboard/overview/FinancialOverviewPanel';
import MaterialHealthPanel from '../../components/dashboard/overview/MaterialHealthPanel';
import ComplianceOverviewPanel from '../../components/dashboard/overview/ComplianceOverviewPanel';
import ExecutiveActivityTimeline from '../../components/dashboard/overview/ExecutiveActivityTimeline';
import { Calendar, Download } from 'lucide-react';

const OverviewDashboard = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
                {/* Header Section */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Command Center</h1>
                        <p className="text-sm text-slate-500 mt-1">Executive Monitoring & Strategic Insights</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm">
                            <Download className="h-4 w-4" />
                            Export Report
                        </button>
                        <div className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg border border-slate-900 shadow-md">
                            <Calendar className="h-4 w-4 text-slate-300" />
                            <span className="text-sm font-bold">Today, Oct 24</span>
                        </div>
                    </div>
                </div>

                {/* Section 1: KPI Grid */}
                <ExecutiveKpiGrid />

                {/* Section 2: Alerts */}
                <RiskAlertBanner />

                {/* Section 3 & 4: Strategic Grid Top (Finance & Projects) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 min-h-[400px]">
                        <FinancialOverviewPanel />
                    </div>
                    <div className="min-h-[400px]">
                        <ProjectPortfolioHealth />
                    </div>
                </div>

                {/* Section 5, 6, 7: Strategic Grid Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="min-h-[350px]">
                        <MaterialHealthPanel />
                    </div>
                    <div className="min-h-[350px]">
                        <ComplianceOverviewPanel />
                    </div>
                    <div className="min-h-[350px]">
                        <ExecutiveActivityTimeline />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default OverviewDashboard;
