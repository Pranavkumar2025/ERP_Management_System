import React, { useState } from 'react';
import { X, Package, Ruler, MapPin, AlertTriangle } from 'lucide-react';

const AddMaterialModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Cement',
        quantity: '',
        unit: 'Bags',
        location: '',
        minStock: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
            {/* Modal Container */}
            <div
                className="bg-white w-full max-w-md rounded-lg shadow-2xl border border-slate-200 transform transition-all scale-100 flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 rounded-t-lg">
                    <div>
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Add New Material</h3>
                        <p className="text-xs text-slate-500 mt-0.5">Enter details to update inventory</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5">

                    {/* Material Name */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                            <Package className="h-3.5 w-3.5 text-slate-400" />
                            Material Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. UltraTech Cement"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium hover:border-slate-400"
                        />
                    </div>

                    {/* Category & Unit Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-700">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium appearance-none hover:border-slate-400"
                            >
                                <option>Cement</option>
                                <option>Steel</option>
                                <option>Sand</option>
                                <option>Aggregate</option>
                                <option>Bricks</option>
                                <option>Paint</option>
                            </select>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                <Ruler className="h-3.5 w-3.5 text-slate-400" />
                                Unit
                            </label>
                            <select
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium hover:border-slate-400"
                            >
                                <option>Bags</option>
                                <option>Kg</option>
                                <option>Ton</option>
                                <option>Sq. ft</option>
                                <option>Liters</option>
                                <option>Pieces</option>
                            </select>
                        </div>
                    </div>

                    {/* Quantity & Min Stock Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-700">Initial Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                required
                                min="0"
                                placeholder="0.00"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-mono font-medium hover:border-slate-400"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                                <AlertTriangle className="h-3.5 w-3.5 text-slate-400" />
                                Min Stock Alert
                            </label>
                            <input
                                type="number"
                                name="minStock"
                                min="0"
                                placeholder="0"
                                value={formData.minStock}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400 font-mono font-medium hover:border-slate-400"
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            Storage Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="e.g. Warehouse A, Shelf 3"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-sm text-slate-700 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 font-medium hover:border-slate-400"
                        />
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
                        className="px-4 py-2 text-xs font-bold text-white bg-slate-900 border border-slate-900 rounded-md hover:bg-slate-800 transition-all shadow-sm hover:shadow active:scale-95"
                    >
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddMaterialModal;
