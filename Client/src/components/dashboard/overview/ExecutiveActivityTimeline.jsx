import React from 'react';
import { ArrowRight } from 'lucide-react';

const TimelineItem = ({ title, time, user, type }) => {
    return (
        <div className="flex gap-4 relative pb-6 last:pb-0 group">
            {/* Minimal Line */}
            <div className={`absolute top-2 left-[3px] h-full w-px bg-slate-100 group-last:hidden`}></div>
            <div className={`h-1.5 w-1.5 rounded-full mt-2 flex-shrink-0 ${type === 'approval' ? 'bg-emerald-500' :
                    type === 'finance' ? 'bg-indigo-500' :
                        type === 'risk' ? 'bg-rose-500' : 'bg-slate-400'
                }`}></div>

            <div className="flex-1">
                <p className="text-xs font-semibold text-slate-800 leading-tight">{title}</p>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-[10px] font-medium text-slate-500">{user}</span>
                    <span className="text-[10px] text-slate-400">{time}</span>
                </div>
            </div>
        </div>
    );
};

const ExecutiveActivityTimeline = () => {
    const activities = [
        { title: 'Project Beta Budget Approved', time: '10:30 AM', user: 'Finance Director', type: 'finance' },
        { title: 'New Vendor Contract Signed', time: '11:45 AM', user: 'Legal Head', type: 'doc' },
        { title: 'Site C Safety Audit Cleared', time: '02:15 PM', user: 'Compliance Officer', type: 'approval' },
        { title: 'Q3 Financial Report Published', time: '04:00 PM', user: 'System', type: 'finance' },
        { title: 'Senior Engineer Onboarded', time: 'Yesterday', user: 'HR Manager', type: 'hr' },
    ];

    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col h-full font-sans">
            <h3 className="text-sm font-semibold text-slate-800 mb-6">Activity Log</h3>

            <div className="flex-1 overflow-auto pr-2 custom-scrollbar">
                {activities.map((activity, idx) => (
                    <TimelineItem key={idx} {...activity} />
                ))}
            </div>

            <button className="w-full mt-4 flex items-center justify-center text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors pt-2 border-t border-slate-100">
                View All Activity <ArrowRight className="h-3 w-3 ml-1" />
            </button>
        </div>
    );
};

export default ExecutiveActivityTimeline;
