import React from 'react';
import { AlertTriangle, Clock, AlertCircle, TrendingDown, ArrowRight, X } from 'lucide-react';

const AlertItem = ({ type, message, time, severity }) => {
    const getStyles = () => {
        switch (severity) {
            case 'critical':
                return 'bg-red-50 text-red-700 border-red-100 hover:bg-red-100/50';
            case 'warning':
                return 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100/50';
            case 'info':
                return 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100/50';
            default:
                return 'bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'delay': return <Clock className="h-4 w-4" />;
            case 'budget': return <TrendingDown className="h-4 w-4" />;
            case 'stock': return <AlertCircle className="h-4 w-4" />;
            case 'compliance': return <AlertTriangle className="h-4 w-4" />;
            default: return <AlertCircle className="h-4 w-4" />;
        }
    };

    return (
        <div className={`flex items-center justify-between p-3 rounded-lg border transition-colors cursor-pointer group ${getStyles()}`}>
            <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-md bg-white bg-opacity-60`}>
                    {getIcon()}
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold leading-tight">{message}</span>
                    <span className="text-[10px] opacity-80">{time}</span>
                </div>
            </div>
            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
        </div>
    );
};

const RiskAlertBanner = () => {
    const alerts = [
        { type: 'delay', message: 'Project Alpha exceeded timeline by 4 days', time: '2 hours ago', severity: 'critical' },
        { type: 'budget', message: 'Marketing budget at 95% utilization', time: '5 hours ago', severity: 'warning' },
        { type: 'stock', message: 'Cement inventory critical at Site C', time: 'Yesterday', severity: 'critical' },
        { type: 'compliance', message: 'Labor license renewal pending', time: '2 days ago', severity: 'warning' },
    ];

    return (
        <div className="bg-white rounded-xl border border-rose-100 shadow-[0_2px_15px_-3px_rgba(225,29,72,0.05)] mb-6 overflow-hidden">
            <div className="px-5 py-3 border-b border-rose-50 bg-rose-50/30 flex justify-between items-center">
                <h3 className="text-xs font-bold text-rose-700 uppercase tracking-wider flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></div>
                    Critical Attention Required
                </h3>
                <span className="text-[10px] font-medium text-rose-600 bg-white px-2 py-0.5 rounded-full border border-rose-100 shadow-sm">
                    4 Active Alerts
                </span>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {alerts.map((alert, idx) => (
                    <AlertItem key={idx} {...alert} />
                ))}
            </div>
        </div>
    );
};

export default RiskAlertBanner;
