import React from 'react';
import { Calendar, FileText } from 'lucide-react';

const ComplianceOverviewPanel = () => {
    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full font-sans">
            <h3 className="text-sm font-semibold text-slate-800 mb-6">Compliance & Audit</h3>

            <div className="flex items-center gap-6 mb-8">
                {/* Minimal Radial Progress */}
                <div className="relative h-24 w-24 flex-shrink-0">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                        <path
                            className="text-slate-100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className="text-purple-600"
                            strokeDasharray="98, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-slate-800">98%</span>
                    </div>
                </div>

                <div className="flex-1">
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Operational compliance is optimal. Next major audit scheduled in <span className="font-semibold text-slate-700">14 days</span>.
                    </p>
                </div>
            </div>

            <div className="mt-auto space-y-3">
                <div className="flex items-start gap-3 py-2 border-t border-slate-50">
                    <Calendar className="h-4 w-4 text-slate-400 mt-0.5" />
                    <div>
                        <p className="text-xs font-semibold text-slate-800">Safety Inspection Audit</p>
                        <p className="text-[10px] text-slate-500">Oct 28, 2026 • Scheduled</p>
                    </div>
                </div>

                <div className="flex items-start gap-3 py-2 border-t border-slate-50">
                    <FileText className="h-4 w-4 text-slate-400 mt-0.5" />
                    <div>
                        <p className="text-xs font-semibold text-slate-800">Labor License Renewal</p>
                        <p className="text-[10px] text-slate-500">Expires in 15 days • <span className="text-amber-600 font-medium">Action Required</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceOverviewPanel;
