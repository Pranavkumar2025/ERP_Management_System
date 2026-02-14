import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ExecutiveKpiGrid from '../../components/dashboard/overview/ExecutiveKpiGrid';
import ProjectPortfolioHealth from '../../components/dashboard/overview/ProjectPortfolioHealth';
import FinancialOverviewPanel from '../../components/dashboard/overview/FinancialOverviewPanel';
import MaterialHealthPanel from '../../components/dashboard/overview/MaterialHealthPanel';
import ComplianceOverviewPanel from '../../components/dashboard/overview/ComplianceOverviewPanel';
import ExecutiveActivityTimeline from '../../components/dashboard/overview/ExecutiveActivityTimeline';
import { Calendar, Download, ChevronRight } from 'lucide-react';

const OverviewDashboard = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
                {/* Header Section */}
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Overview</h1>
                        <p className="text-sm text-slate-500 font-medium mt-1">Enterprise Operations Center</p>
                    </div>

                    <div className="flex items-center bg-white rounded-lg border border-slate-200 shadow-sm p-1">
                        <div className="flex items-center gap-2 px-3 py-1.5 border-r border-slate-100">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-700">System Nominal</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 border-r border-slate-100">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            <span className="text-xs font-semibold text-slate-600">Oct 24, 2026</span>
                        </div>
                        <button className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2">
                            <Download className="h-3.5 w-3.5" />
                            <span>Export</span>
                        </button>
                    </div>
                </div>

                {/* Section 1: KPI Grid */}
                <ExecutiveKpiGrid />

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
