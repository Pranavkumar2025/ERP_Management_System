import React, { useState } from 'react';
import { X, Calendar, DollarSign, List, Trash2, PlusCircle, Building2 } from 'lucide-react';

const CreatePOModal = ({ isOpen, onClose, onCreate }) => {
    const [poData, setPoData] = useState({
        vendorName: '',
        expectedDate: '',
        items: [
            { id: 1, material: '', quantity: '', unitPrice: '' }
        ]
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPoData(prev => ({ ...prev, [name]: value }));
    };

    const handleItemChange = (id, field, value) => {
        setPoData(prev => ({
            ...prev,
            items: prev.items.map(item =>
                item.id === id ? { ...item, [field]: value } : item
            )
        }));
    };

    const addItem = () => {
        setPoData(prev => ({
            ...prev,
            items: [...prev.items, { id: Date.now(), material: '', quantity: '', unitPrice: '' }]
        }));
    };

    const removeItem = (id) => {
        if (poData.items.length > 1) {
            setPoData(prev => ({
                ...prev,
                items: prev.items.filter(item => item.id !== id)
            }));
        }
    };

    const calculateTotal = () => {
        return poData.items.reduce((sum, item) => {
            return sum + (Number(item.quantity || 0) * Number(item.unitPrice || 0));
        }, 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({
            ...poData,
            totalValue: calculateTotal(),
            dateCreated: new Date().toISOString()
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
            {/* Modal Container - Wider for PO */}
            <div
                className="bg-white w-full max-w-2xl rounded-lg shadow-2xl border border-slate-200 transform transition-all scale-100 flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-lg">
                    <div>
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Create Purchase Order</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Draft new order for suppliers</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">

                    {/* Top Row: Vendor & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                <Building2 className="h-3.5 w-3.5 text-slate-400" />
                                Select Vendor
                            </label>
                            <select
                                name="vendorName"
                                value={poData.vendorName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium hover:border-slate-400"
                            >
                                <option value="">Select a supplier...</option>
                                <option>BuildMate Supplies</option>
                                <option>SteelCity Traders</option>
                                <option>National Cement Co.</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                Expected Delivery
                            </label>
                            <input
                                type="date"
                                name="expectedDate"
                                value={poData.expectedDate}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-500 font-medium hover:border-slate-400"
                            />
                        </div>
                    </div>

                    {/* Line Items Section */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                                <List className="h-3.5 w-3.5 text-slate-400" />
                                Line Items
                            </label>
                            <button
                                type="button"
                                onClick={addItem}
                                className="text-[10px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-2 py-1 rounded transition-colors"
                            >
                                <PlusCircle className="h-3 w-3" />
                                Add Item
                            </button>
                        </div>

                        <div className="space-y-3">
                            {poData.items.map((item, index) => (
                                <div key={item.id} className="flex items-start gap-3 p-3 bg-slate-50/50 rounded-md border border-slate-100 group hover:border-slate-200 transition-colors">
                                    <div className="flex-1 space-y-1">
                                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Material</span>
                                        <input
                                            type="text"
                                            placeholder="Item name"
                                            value={item.material}
                                            onChange={(e) => handleItemChange(item.id, 'material', e.target.value)}
                                            className="w-full px-2 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded focus:outline-none focus:border-blue-400 transition-all"
                                        />
                                    </div>
                                    <div className="w-24 space-y-1">
                                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Qty</span>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            value={item.quantity}
                                            onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                                            className="w-full px-2 py-1.5 text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 rounded focus:outline-none focus:border-blue-400 text-right"
                                        />
                                    </div>
                                    <div className="w-28 space-y-1">
                                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Unit Price</span>
                                        <div className="relative">
                                            <span className="absolute left-2 top-1.5 text-slate-400 text-xs">$</span>
                                            <input
                                                type="number"
                                                placeholder="0.00"
                                                value={item.unitPrice}
                                                onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                                                className="w-full pl-5 pr-2 py-1.5 text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 rounded focus:outline-none focus:border-blue-400 text-right"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-6">
                                        <button
                                            type="button"
                                            onClick={() => removeItem(item.id)}
                                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                            disabled={poData.items.length === 1}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Total Summary */}
                    <div className="flex justify-end pt-2">
                        <div className="w-full max-w-xs bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <div className="flex justify-between items-center text-sm font-bold text-slate-800">
                                <span>Total Estimate</span>
                                <span className="font-mono text-lg text-emerald-600">${calculateTotal().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-lg flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-800 transition-all shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 text-xs font-bold text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700 transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-2"
                    >
                        <DollarSign className="h-3.5 w-3.5" />
                        Create Purchase Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePOModal;
