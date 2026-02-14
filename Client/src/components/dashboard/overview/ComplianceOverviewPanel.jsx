import React from 'react';
import { ShieldCheck, Calendar, FileText, AlertCircle } from 'lucide-react';

const ComplianceOverviewPanel = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-slate-800 font-bold text-lg">Compliance & Audit</h3>
                    <p className="text-slate-500 text-xs">Legal & Regulatory Status</p>
                </div>
                <div className="p-2 bg-purple-50 rounded-lg border border-purple-100">
                    <ShieldCheck className="h-4 w-4 text-purple-600" />
                </div>
            </div>

            <div className="flex items-center justify-center py-6 relative">
                {/* Radial Progress Mockup - CSS only for simplicity */}
                <div className="h-32 w-32 rounded-full border-[8px] border-slate-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-[8px] border-purple-600 border-t-transparent border-l-transparent text-purple-600 transform rotate-45"></div>
                    <div className="text-center z-10">
                        <span className="text-3xl font-bold text-slate-800">98%</span>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Score</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4 mt-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <div className="flex-1">
                        <p className="text-xs font-bold text-slate-700">Audit Scheduled</p>
                        <p className="text-[10px] text-slate-500">Oct 28, 2026 • Safety Inspection</p>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded font-bold">Upcoming</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <FileText className="h-4 w-4 text-slate-400" />
                    <div className="flex-1">
                        <p className="text-xs font-bold text-slate-700">License Renewal</p>
                        <p className="text-[10px] text-slate-500">Labor Dept • Expires in 15 days</p>
                    </div>
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] rounded font-bold">Action</span>
                </div>
            </div>
        </div>
    );
};

export default ComplianceOverviewPanel;
