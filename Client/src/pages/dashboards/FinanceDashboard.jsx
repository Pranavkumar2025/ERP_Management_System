import React from 'react';

import FinanceLayout from '../../components/layout/FinanceLayout';
import FinanceKPISection from '../../components/dashboard/finance/FinanceKPISection';
import InvoiceTable from '../../components/dashboard/finance/InvoiceTable';
import PaymentsPanel from '../../components/dashboard/finance/PaymentsPanel';
import BudgetOverview from '../../components/dashboard/finance/BudgetOverview';
import VendorSummary from '../../components/dashboard/finance/VendorSummary';
import { Download, Calendar, Bell } from 'lucide-react';

const FinanceDashboard = () => {
    return (
        <FinanceLayout>
            <div className="space-y-6 max-w-[1600px] mx-auto">

                {/* Top Header */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Finance Control Center</h1>
                        <p className="text-xs text-slate-500 mt-0.5">Manage invoices, payments, budgets, and vendors</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
                        <div className="flex items-center space-x-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            <select className="bg-transparent text-xs text-slate-700 font-medium focus:ring-0 border-none pr-6 pl-0 cursor-pointer outline-none">
                                <option>Current Financial Year</option>
                                <option>This Quarter</option>
                                <option>This Month</option>
                                <option>Custom Range</option>
                            </select>
                        </div>

                        <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

                        <button className="flex items-center space-x-1.5 bg-white text-slate-700 px-3 py-1.5 rounded-md border border-slate-200 text-xs font-semibold hover:bg-slate-50 transition-colors">
                            <Download className="h-3.5 w-3.5 text-slate-500" />
                            <span>Export Report</span>
                        </button>

                        <button className="relative p-1.5 rounded-md hover:bg-slate-50 text-slate-500 border border-transparent hover:border-slate-200 transition-all">
                            <Bell className="h-4 w-4" />
                            <span className="absolute top-1.5 right-2 h-1.5 w-1.5 rounded-full bg-red-500 border border-white"></span>
                        </button>
                    </div>
                </div>

                {/* KPI Section */}
                <FinanceKPISection />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                    {/* Left Column (2/3 width) - Main Focus */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Payments Overview (Moved here for better visibility) */}
                        <div className="h-auto min-h-[400px]">
                            <PaymentsPanel />
                        </div>

                        {/* Invoice Management */}
                        <div className="h-[500px]">
                            <InvoiceTable />
                        </div>
                    </div>

                    {/* Right Column (1/3 width) - Summaries */}
                    <div className="space-y-6">
                        {/* Budget Overview */}
                        <div className="h-[350px]">
                            <BudgetOverview />
                        </div>

                        {/* Vendor Summary */}
                        <div className="h-[400px]">
                            <VendorSummary />
                        </div>
                    </div>
                </div>
            </div>
        </FinanceLayout>
    );
};

export default FinanceDashboard;
