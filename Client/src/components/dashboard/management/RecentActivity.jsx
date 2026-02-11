import React from 'react';
import { Clock, CheckCircle2, AlertOctagon, FileText, User, ArrowRight } from 'lucide-react';

const RecentActivity = () => {
    const activities = [
        { id: 1, type: 'approval', message: 'PO 482 Approved', user: 'Admin User', time: '10m', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-100' },
        { id: 2, type: 'alert', message: 'Low Stock: Red Bricks', user: 'System', time: '1h', icon: AlertOctagon, color: 'text-red-600 bg-red-100' },
        { id: 3, type: 'report', message: 'Daily Usage Generated', user: 'System', time: '4h', icon: FileText, color: 'text-blue-600 bg-blue-100' },
        { id: 4, type: 'update', message: 'Supplier Updated', user: 'Admin User', time: '1d', icon: User, color: 'text-amber-600 bg-amber-100' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100 p-5 h-full flex flex-col">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-sm font-bold text-slate-800 tracking-tight">Activity Log</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-50 rounded text-slate-400 border border-slate-100">Today</span>
            </div>

            <div className="space-y-5 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {activities.map((activity, index) => (
                    <div key={activity.id} className="relative flex items-start group">
                        {/* Connecting Line */}
                        {index !== activities.length - 1 && (
                            <div className="absolute left-3.5 top-7 bottom-[-20px] w-[1px] bg-slate-100 group-hover:bg-slate-200 transition-colors"></div>
                        )}

                        <div className={`relative z-10 p-1.5 rounded-lg ${activity.color} bg-opacity-10 shrink-0 mr-3 ring-2 ring-white`}>
                            <activity.icon className="h-3.5 w-3.5" />
                        </div>

                        <div className="flex-1 min-w-0 pt-0.5">
                            <div className="flex justify-between items-start">
                                <p className="text-xs font-semibold text-slate-800 truncate leading-tight">
                                    {activity.message}
                                </p>
                                <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-1 py-0.5 rounded ml-2 tracking-wide">
                                    {activity.time}
                                </span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-0.5 font-medium">
                                by <span className="text-slate-600">{activity.user}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-5 py-2 flex items-center justify-center text-xs font-bold text-slate-500 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all group tracking-wide">
                View All History
                <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

export default RecentActivity;
