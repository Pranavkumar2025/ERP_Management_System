import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Calendar, User, AlertCircle, ArrowRight } from 'lucide-react';

const KpiDetailView = ({ title, onClose, metrics, data }) => {
    const modalRef = useRef(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    // Mock data based on title if not provided
    const getContent = () => {
        if (title === 'Active Projects') {
            return (
                <div className="overflow-hidden rounded-lg border border-slate-200">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="py-3 px-4 font-semibold text-slate-700">Project Name</th>
                                <th className="py-3 px-4 font-semibold text-slate-700">Manager</th>
                                <th className="py-3 px-4 font-semibold text-slate-700">Status</th>
                                <th className="py-3 px-4 font-semibold text-slate-700">Completion</th>
                                <th className="py-3 px-4 font-semibold text-slate-700">Deadline</th>
                                <th className="py-3 px-4 font-semibold text-slate-700 text-right">Budget Used</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <td className="py-3 px-4 font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">
                                        {['City Center Mall', 'Highway Exp Ph-2', 'Tech Park Zeta', 'Metro Station 4', 'River Bridge', 'Housing Complex'][i - 1]}
                                    </td>
                                    <td className="py-3 px-4 text-slate-500 flex items-center gap-2">
                                        <div className="h-5 w-5 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-600">
                                            {['JD', 'AS', 'MK', 'RP', 'TB', 'LC'][i - 1]}
                                        </div>
                                        {['John Doe', 'Amit Singh', 'Meera K', 'Rahul P', 'Tim B', 'Lisa C'][i - 1]}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${i === 2 ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                            i === 5 ? 'bg-rose-50 text-rose-700 border-rose-100' :
                                                'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            }`}>
                                            {i === 2 ? 'Delayed' : i === 5 ? 'Critical' : 'On Track'}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${i === 2 ? 'bg-amber-500' : i === 5 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${Math.floor(Math.random() * 40) + 40}%` }}></div>
                                            </div>
                                            <span className="text-slate-500">{Math.floor(Math.random() * 40) + 40}%</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-slate-500">
                                        Oct {20 + i}, 2026
                                    </td>
                                    <td className="py-3 px-4 text-right font-medium text-slate-700">
                                        ₹ {Math.floor(Math.random() * 50) + 10} L
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        if (title === 'Total Budget' || title === 'YTD Revenue' || title === 'Cash Flow') {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-lg border border-slate-200">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="py-3 px-4 font-semibold text-slate-700">Category</th>
                                    <th className="py-3 px-4 font-semibold text-slate-700 text-right">Allocated</th>
                                    <th className="py-3 px-4 font-semibold text-slate-700 text-right">Spent</th>
                                    <th className="py-3 px-4 font-semibold text-slate-700 text-right">Remaining</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {['Materials', 'Labor', 'Equipment', 'Subcontractors', 'Admin/Overhead'].map((cat, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="py-3 px-4 font-medium text-slate-800">{cat}</td>
                                        <td className="py-3 px-4 text-right text-slate-500">₹ {[4.5, 3.2, 1.8, 2.5, 0.8][i]} Cr</td>
                                        <td className="py-3 px-4 text-right text-slate-700 font-medium">₹ {[2.1, 1.9, 0.6, 1.2, 0.4][i]} Cr</td>
                                        <td className="py-3 px-4 text-right text-emerald-600">₹ {[2.4, 1.3, 1.2, 1.3, 0.4][i]} Cr</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-slate-50 border-t border-slate-200">
                                <tr>
                                    <td className="py-3 px-4 font-bold text-slate-800">Total</td>
                                    <td className="py-3 px-4 text-right font-bold text-slate-800">₹ 12.8 Cr</td>
                                    <td className="py-3 px-4 text-right font-bold text-slate-800">₹ 6.2 Cr</td>
                                    <td className="py-3 px-4 text-right font-bold text-emerald-600">₹ 6.6 Cr</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Financial Alerts</h4>
                            <div className="space-y-3">
                                <div className="flex gap-3 items-start">
                                    <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-800">Labor Budget Deviation</p>
                                        <p className="text-[10px] text-slate-500 mt-0.5">Project Beta labor costs are 15% higher than projected.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <AlertCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-800">Invoice Approval Pending</p>
                                        <p className="text-[10px] text-slate-500 mt-0.5">4 major equipment invoices pending approval &gt; 5 days.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-2.5 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                            Download Financial Full Report <ExternalLink className="h-3 w-3" />
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <div className="p-8 text-center text-slate-500 text-sm">
                Detailed view for {title} is under development.
            </div>
        );
    };

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
            <div
                ref={modalRef}
                className="bg-white w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 rounded-t-xl">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                        <h2 className="text-lg font-bold text-slate-800 tracking-tight">{title} <span className="text-slate-400 font-normal">| Enterprise View</span></h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-slate-200/50 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                    {getContent()}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/30 rounded-b-xl">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                        Close
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors flex items-center shadow-sm shadow-indigo-200">
                        View Full Platform <ArrowRight className="h-3.5 w-3.5 ml-2" />
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default KpiDetailView;
