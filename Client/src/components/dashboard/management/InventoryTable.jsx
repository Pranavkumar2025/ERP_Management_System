import React, { useState, useMemo } from 'react';
import StatusBadge from '../../ui/StatusBadge';
import { Search, Filter, ChevronLeft, ChevronRight, ArrowUpDown, MoreHorizontal, Plus, FileText } from 'lucide-react';

const InventoryTable = ({ data, onOpenAddMaterial, onOpenCreatePO }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7; // Increased density allows more items

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    // Filter Logic
    const filteredData = useMemo(() =>
        data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        ), [data, searchTerm]
    );

    // Sorting Logic
    const sortedData = useMemo(() => {
        let sortableItems = [...filteredData];
        if (sortConfig.key !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                // Handle numeric strings like "450 Bags"
                if (typeof aValue === 'string' && aValue.match(/^\d/)) {
                    aValue = parseFloat(aValue.replace(/[^0-9.-]+/g, ""));
                    bValue = parseFloat(bValue.replace(/[^0-9.-]+/g, ""));
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredData, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // Pagination Logic
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = sortedData.slice(startIndex, startIndex + itemsPerPage);

    const getCategoryColor = (category) => {
        const colors = {
            'Cement': 'bg-slate-100 text-slate-700 border-slate-200',
            'Steel': 'bg-blue-50 text-blue-700 border-blue-100',
            'Sand': 'bg-amber-50 text-amber-700 border-amber-100',
            'Bricks': 'bg-red-50 text-red-700 border-red-100',
            'Aggregate': 'bg-stone-100 text-stone-700 border-stone-200',
        };
        return colors[category] || 'bg-slate-50 text-slate-600 border-slate-200';
    };

    return (
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden font-sans">

            {/* Header & Controls */}
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-200 bg-slate-50/30">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Detailed Inventory</h3>

                <div className="flex items-center gap-2">
                    {/* Action Buttons */}
                    <button
                        onClick={onOpenCreatePO}
                        className="flex items-center space-x-1 bg-white text-slate-600 px-2.5 py-1 rounded-md border border-slate-200 text-xs font-bold hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
                    >
                        <FileText className="h-3 w-3 text-slate-400 group-hover:text-blue-500" />
                        <span>Create PO</span>
                    </button>
                    <button
                        onClick={onOpenAddMaterial}
                        className="flex items-center space-x-1 bg-slate-900 text-white px-2.5 py-1 rounded-md border border-slate-900 text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
                    >
                        <Plus className="h-3 w-3 text-slate-400" />
                        <span>Add Material</span>
                    </button>

                    <div className="h-4 w-px bg-slate-300 mx-1"></div>

                    <div className="relative group">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                            type="text"
                            placeholder="Find material..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-48 pl-8 pr-3 py-1 text-xs bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-slate-400 font-medium text-slate-700"
                        />
                    </div>
                </div>
            </div>

            {/* Table - Fixed Layout */}
            <div className="flex-1 overflow-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 sticky top-0 z-10">
                        <tr className="border-b border-slate-200">
                            {[
                                { label: 'Material Name', key: 'name', width: '25%' },
                                { label: 'Category', key: 'category', width: '10%' },
                                { label: 'Total Qty', key: 'quantity', width: '10%', align: 'right' },
                                { label: 'Available', key: 'available', width: '10%', align: 'right' },
                                { label: 'Reserved', key: 'reserved', width: '10%', align: 'right' },
                                { label: 'Value', key: 'value', width: '10%', align: 'right' },
                                { label: 'Location', key: 'location', width: '10%' },
                                { label: 'Status', key: 'status', width: '10%' },
                                { label: '', key: null, width: '5%' }
                            ].map((col, idx) => (
                                <th
                                    key={idx}
                                    className={`px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:bg-slate-100 hover:text-slate-700 transition-colors ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                                    style={{ width: col.width }}
                                    onClick={() => col.key && requestSort(col.key)}
                                >
                                    <div className={`flex items-center ${col.align === 'right' ? 'justify-end' : ''} gap-1`}>
                                        {col.label}
                                        {col.key && <ArrowUpDown className="h-2.5 w-2.5 text-slate-300" />}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {currentData.length > 0 ? (
                            currentData.map((item, index) => (
                                <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-4 py-2.5">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-slate-700 truncate">{item.name}</span>
                                            <span className="text-[9px] font-mono text-slate-400">{item.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2.5">
                                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded-[3px] border text-[9px] font-bold uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2.5 text-right font-mono text-xs font-medium text-slate-700">{item.quantity}</td>
                                    <td className="px-4 py-2.5 text-right font-mono text-xs font-bold text-emerald-600">{item.available}</td>
                                    <td className="px-4 py-2.5 text-right font-mono text-xs font-medium text-amber-600">{item.reserved}</td>
                                    <td className="px-4 py-2.5 text-right font-mono text-xs font-medium text-slate-600">{item.value}</td>
                                    <td className="px-4 py-2.5 text-[10px] font-medium text-slate-500">{item.location}</td>
                                    <td className="px-4 py-2.5">
                                        <StatusBadge status={item.status} className="scale-90 origin-left" />
                                    </td>
                                    <td className="px-4 py-2.5 text-right">
                                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="px-4 py-12 text-center text-slate-400 text-sm">
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-4 py-2 border-t border-slate-200 bg-slate-50/50 flex items-center justify-between">
                <div className="text-[10px] font-medium text-slate-500">
                    Showing <span className="font-bold text-slate-700">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> of {filteredData.length}
                </div>
                <div className="flex gap-1">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-1 rounded hover:bg-white hover:shadow-sm disabled:opacity-30 text-slate-500 transition-all border border-transparent hover:border-slate-200"
                    >
                        <ChevronLeft className="h-3 w-3" />
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className="p-1 rounded hover:bg-white hover:shadow-sm disabled:opacity-30 text-slate-500 transition-all border border-transparent hover:border-slate-200"
                    >
                        <ChevronRight className="h-3 w-3" />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default InventoryTable;
