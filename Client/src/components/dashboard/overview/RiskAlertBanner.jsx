import React from 'react';
import { AlertCircle } from 'lucide-react';

const RiskAlertBanner = () => {
    const alerts = [
        { message: 'Project Alpha exceeded timeline by 4 days', severity: 'critical', time: '2h ago' },
        { message: 'Cement inventory critical at Site C', severity: 'critical', time: 'Yesterday' },
        { message: 'Marketing budget at 95% utilization', severity: 'warning', time: '5h ago' },
        { message: 'Labor license renewal pending', severity: 'warning', time: '2d ago' },
    ];

    return (
        <div className="bg-white rounded-lg border border-slate-200 mb-6 font-sans">
            <div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-800">Critical Attention Required</h3>
                <span className="text-xs font-medium text-rose-600">{alerts.length} Alerts</span>
            </div>
            <div className="divide-y divide-slate-50">
                {alerts.map((alert, idx) => (
                    <div key={idx} className="px-5 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className={`h-2 w-2 rounded-full ${alert.severity === 'critical' ? 'bg-rose-500' : 'bg-amber-500'}`}></div>
                            <span className="text-sm text-slate-700 font-medium">{alert.message}</span>
                        </div>
                        <span className="text-xs text-slate-400">{alert.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiskAlertBanner;
