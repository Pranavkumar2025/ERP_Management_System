import React from 'react';
import { CheckCircle2, FileText, UserPlus, DollarSign, ArrowRight } from 'lucide-react';

const TimelineItem = ({ title, time, user, type }) => {
    const getIcon = () => {
        switch (type) {
            case 'approval': return <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />;
            case 'finance': return <DollarSign className="h-3.5 w-3.5 text-indigo-600" />;
            case 'doc': return <FileText className="h-3.5 w-3.5 text-blue-600" />;
            case 'hr': return <UserPlus className="h-3.5 w-3.5 text-purple-600" />;
            default: return <CheckCircle2 className="h-3.5 w-3.5 text-slate-400" />;
        }
    };

    const getBg = () => {
        switch (type) {
            case 'approval': return 'bg-emerald-100 border-emerald-200';
            case 'finance': return 'bg-indigo-100 border-indigo-200';
            case 'doc': return 'bg-blue-100 border-blue-200';
            case 'hr': return 'bg-purple-100 border-purple-200';
            default: return 'bg-slate-100 border-slate-200';
        }
    };

    return (
        <div className="flex gap-3 relative pb-6 last:pb-0">
            <div className={`absolute top-0 left-[15px] h-full w-px bg-slate-200 -z-10`}></div>
            <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 bg-white z-10 ${getBg()}`}>
                {getIcon()}
            </div>
            <div className="flex-1 pt-0.5">
                <p className="text-xs font-bold text-slate-800">{title}</p>
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
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-slate-800 font-bold text-lg">Activity Log</h3>
                    <p className="text-slate-500 text-xs">Recent Executive Actions</p>
                </div>
            </div>

            <div className="flex-1 overflow-auto pr-2">
                {activities.map((activity, idx) => (
                    <TimelineItem key={idx} {...activity} />
                ))}
            </div>

            <button className="w-full mt-4 flex items-center justify-center p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold transition-colors">
                View All Activity
            </button>
        </div>
    );
};

export default ExecutiveActivityTimeline;
