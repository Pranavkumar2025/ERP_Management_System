import React, { useState, useMemo } from 'react';
import StatusBadge from '../../ui/StatusBadge';
import { Search, Filter, ChevronLeft, ChevronRight, ArrowUpDown, Eye, CheckCircle, DollarSign, MoreHorizontal } from 'lucide-react';

const InvoiceTable = () => {
    // Mock Data
    const invoices = [
        { id: 'INV-2024-001', vendor: 'UltraTech Cement', project: 'Highway Expansion', date: '2024-10-15', due: '2024-11-15', amount: '₹ 4,50,000', status: 'Pending' },
        { id: 'INV-2024-002', vendor: 'Tata Steel', project: 'Metro Station B', date: '2024-10-12', due: '2024-11-12', amount: '₹ 12,20,000', status: 'Approved' },
        { id: 'INV-2024-003', vendor: 'Larsen & Toubro', project: 'City Center Mall', date: '2024-10-10', due: '2024-10-30', amount: '₹ 8,75,000', status: 'Paid' },
        { id: 'INV-2024-004', vendor: 'Asian Paints', project: 'Residential Complex', date: '2024-09-28', due: '2024-10-28', amount: '₹ 1,50,000', status: 'Overdue' },
        { id: 'INV-2024-005', vendor: 'Jindal Steel', project: 'Metro Station B', date: '2024-10-18', due: '2024-11-18', amount: '₹ 5,60,000', status: 'Pending' },
        { id: 'INV-2024-006', vendor: 'Local Sand Supply', project: 'Highway Expansion', date: '2024-10-20', due: '2024-11-20', amount: '₹ 95,000', status: 'Approved' },
        { id: 'INV-2024-007', vendor: 'Havells Electricals', project: 'City Center Mall', date: '2024-10-05', due: '2024-11-05', amount: '₹ 3,40,000', status: 'Paid' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filter & Search Logic
    const filteredData = useMemo(() =>
        invoices.filter(item =>
            item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm]
    );

    // Pagination Logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden font-sans">
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/30">
                <div>
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Invoice Management</h3>
                    <p className="text-xs text-slate-500 mt-1">Track and process vendor invoices</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search invoices..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-64 pl-9 pr-4 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-slate-400 font-medium text-slate-700"
                        />
                    </div>
                    <button className="p-1.5 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600 transition-colors">
                        <Filter className="h-4 w-4" />
                    </button>
                    <button className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                        <DollarSign className="h-3.5 w-3.5" />
                        <span>Pay</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 sticky top-0 z-10">
                        <tr className="border-b border-slate-200">
                            {['Invoice ID', 'Vendor', 'Project', 'Inv. Date', 'Due Date', 'Amount', 'Status', 'Actions'].map((head, i) => (
                                <th key={i} className={`px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider ${head === 'Amount' ? 'text-right' : 'text-left'}`}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {currentData.length > 0 ? (
                            currentData.map((item, index) => (
                                <tr key={index} className="hover:bg-slate-50/80 transition-colors group">
                                    <td className="px-4 py-2.5 text-xs font-bold text-slate-700 font-mono">{item.id}</td>
                                    <td className="px-4 py-2.5 text-xs font-bold text-slate-700">{item.vendor}</td>
                                    <td className="px-4 py-2.5 text-xs text-slate-600">{item.project}</td>
                                    <td className="px-4 py-2.5 text-[10px] font-medium text-slate-500">{item.date}</td>
                                    <td className="px-4 py-2.5 text-[10px] font-medium text-slate-600">{item.due}</td>
                                    <td className="px-4 py-2.5 text-xs font-bold text-slate-800 text-right font-mono">{item.amount}</td>
                                    <td className="px-4 py-2.5">
                                        <StatusBadge status={item.status} className="scale-90 origin-left" />
                                    </td>
                                    <td className="px-4 py-2.5">
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                                            <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                                <Eye className="h-4 w-4" />
                                            </button>
                                            <button className="text-slate-400 hover:text-emerald-600 transition-colors">
                                                <CheckCircle className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="px-4 py-12 text-center text-slate-400 text-sm">
                                    No invoices found matching your criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-4 py-2 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-medium">
                    Showing <span className="font-bold text-slate-700">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> of {filteredData.length} invoices
                </span>
                <div className="flex gap-1">
                    <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 text-slate-500 disabled:opacity-30 transition-all"
                    >
                        <ChevronLeft className="h-3 w-3" />
                    </button>
                    <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="p-1 rounded hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200 text-slate-500 disabled:opacity-30 transition-all"
                    >
                        <ChevronRight className="h-3 w-3" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceTable;
