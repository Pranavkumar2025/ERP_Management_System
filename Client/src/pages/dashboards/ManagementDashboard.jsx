import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import KpiCard from '../../components/dashboard/shared/KpiCard';
import InventoryTable from '../../components/dashboard/management/InventoryTable';
import SupplierTable from '../../components/dashboard/management/SupplierTable';
import MaterialTrendChart from '../../components/dashboard/management/MaterialTrendChart';
import RecentActivity from '../../components/dashboard/management/RecentActivity';
import StockRiskPanel from '../../components/dashboard/management/StockRiskPanel';
import FinancialSummaryCard from '../../components/dashboard/management/FinancialSummaryCard';
import AddMaterialModal from '../../components/dashboard/management/AddMaterialModal';
import CreatePOModal from '../../components/dashboard/management/CreatePOModal';
import { Package, Truck, AlertTriangle, TrendingUp, Calendar, Download, Plus, DollarSign, Layers, Activity, AlertCircle } from 'lucide-react';

const ManagementDashboard = () => {
    const [isAddMaterialOpen, setIsAddMaterialOpen] = useState(false);
    const [isCreatePOOpen, setIsCreatePOOpen] = useState(false);

    // Mock Data - Enhanced for Enterprise
    const kpiData = [
        { title: 'Total Inventory', value: '1,240 Tons', icon: Package, trend: 'up', trendValue: '12%', color: 'bg-blue-50 text-blue-600', trendLabel: 'vs last week' },
        { title: 'Available Stock', value: '850 Tons', icon: Layers, trend: 'up', trendValue: '8%', color: 'bg-emerald-50 text-emerald-600', trendLabel: 'usable' },
        { title: 'Reserved Stock', value: '390 Tons', icon: Package, trend: 'normal', trendValue: 'Stable', color: 'bg-purple-50 text-purple-600', trendLabel: 'allocated' },
        { title: 'Inventory Value', value: '₹ 2.4 Cr', icon: DollarSign, trend: 'up', trendValue: '15%', color: 'bg-indigo-50 text-indigo-600', trendLabel: 'total asset' },
        { title: 'Critical Stock', value: '5 Items', icon: AlertTriangle, trend: 'down', trendValue: '2', color: 'bg-red-50 text-red-600', trendLabel: 'urgent attn' },
        { title: 'Weekly Cost', value: '₹ 12.5 L', icon: Activity, trend: 'up', trendValue: '5%', color: 'bg-amber-50 text-amber-600', trendLabel: 'burn rate' },
    ];

    const inventoryData = [
        { id: 'MAT-001', name: 'Portland Cement', category: 'Cement', quantity: '450', unit: 'Bags', available: '300', reserved: '150', value: '₹ 1,57,500', location: 'Warehouse A', reorderLevel: '100', status: 'Normal', lastUpdated: '2 hrs ago' },
        { id: 'MAT-002', name: 'TMT Steel Bars (12mm)', category: 'Steel', quantity: '12', unit: 'Tons', available: '2', reserved: '10', value: '₹ 6,60,000', location: 'Yard B', reorderLevel: '15', status: 'Low', lastUpdated: '4 hrs ago' },
        { id: 'MAT-003', name: 'River Sand', category: 'Sand', quantity: '85', unit: 'Tons', available: '85', reserved: '0', value: '₹ 1,27,500', location: 'Yard A', reorderLevel: '50', status: 'Normal', lastUpdated: '1 day ago' },
        { id: 'MAT-004', name: 'Coarse Aggregate', category: 'Aggregate', quantity: '120', unit: 'Tons', available: '100', reserved: '20', value: '₹ 96,000', location: 'Yard A', reorderLevel: '40', status: 'Normal', lastUpdated: '2 days ago' },
        { id: 'MAT-005', name: 'Red Bricks', category: 'Bricks', quantity: '500', unit: 'Pcs', available: '0', reserved: '500', value: '₹ 5,000', location: 'Site C', reorderLevel: '1000', status: 'Critical', lastUpdated: '1 hr ago' },
        { id: 'MAT-006', name: 'White Cement', category: 'Cement', quantity: '80', unit: 'Bags', available: '80', reserved: '0', value: '₹ 32,000', location: 'Warehouse A', reorderLevel: '20', status: 'Normal', lastUpdated: '3 days ago' },
    ];

    const supplierData = [
        { name: 'UltraTech Cement', materialsSupplied: 'Cement', onTimePercentage: 98, avgDelay: '0', totalValue: '₹ 45L', rating: '4.9' },
        { name: 'Tata Steel Ltd', materialsSupplied: 'Steel', onTimePercentage: 92, avgDelay: '2', totalValue: '₹ 1.2Cr', rating: '4.7' },
        { name: 'Local Sand Suppliers', materialsSupplied: 'Sand', onTimePercentage: 85, avgDelay: '5', totalValue: '₹ 12L', rating: '4.2' },
        { name: 'ABC Brick Works', materialsSupplied: 'Bricks', onTimePercentage: 78, avgDelay: '8', totalValue: '₹ 8L', rating: '3.8' },
    ];

    const chartData = [
        { name: 'Mon', cement: 40, steel: 24, amt: 2400 },
        { name: 'Tue', cement: 30, steel: 13, amt: 2210 },
        { name: 'Wed', cement: 20, steel: 58, amt: 2290 },
        { name: 'Thu', cement: 27, steel: 39, amt: 2000 },
        { name: 'Fri', cement: 18, steel: 48, amt: 2181 },
        { name: 'Sat', cement: 23, steel: 38, amt: 2500 },
        { name: 'Sun', cement: 34, steel: 43, amt: 2100 },
    ];

    const handleAddMaterial = (newItem) => {
        console.log("Adding new material:", newItem);
        // Logic to update data/backend would go here
    };

    const handleCreatePO = (poDetails) => {
        console.log("Creating PO:", poDetails);
        // Logic to send PO to backend would go here
    };

    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-[1600px] mx-auto">

                {/* Header Section with Action Panel */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-slate-100">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Material Management</h1>
                        <p className="text-xs text-slate-500 mt-0.5">Enterprise Resource Planning & Stock Control</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
                        <div className="flex items-center space-x-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            <select className="bg-transparent text-xs text-slate-700 font-medium focus:ring-0 border-none pr-6 pl-0 cursor-pointer outline-none">
                                <option>Current Financial Year</option>
                                <option>This Quarter</option>
                                <option>This Month</option>
                            </select>
                        </div>

                        <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

                        <button
                            onClick={() => setIsCreatePOOpen(true)}
                            className="flex items-center space-x-1.5 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
                        >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Create PO</span>
                        </button>
                        <button
                            onClick={() => setIsAddMaterialOpen(true)}
                            className="flex items-center space-x-1.5 bg-white text-slate-700 px-3 py-1.5 rounded-md border border-slate-200 text-xs font-semibold hover:bg-slate-50 transition-colors"
                        >
                            <Package className="h-3.5 w-3.5 text-slate-500" />
                            <span>Add Material</span>
                        </button>
                        <button className="flex items-center space-x-1.5 bg-white text-slate-700 px-3 py-1.5 rounded-md border border-slate-200 text-xs font-semibold hover:bg-slate-50 transition-colors">
                            <Download className="h-3.5 w-3.5 text-slate-500" />
                            <span>Report</span>
                        </button>
                    </div>
                </div>

                {/* Enhanced KPI Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {kpiData.map((kpi, index) => (
                        <KpiCard key={index} {...kpi} />
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Column (2/3 width) - Analysis & Performance */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Chart Section */}
                        <div className="h-[350px]">
                            <MaterialTrendChart data={chartData} />
                        </div>

                        {/* Supplier Performance (Moved to wider column) */}
                        <div className="h-[400px]">
                            <SupplierTable data={supplierData} />
                        </div>
                    </div>

                    {/* Right Column (1/3 width) - Financials & Activity */}
                    <div className="space-y-6 flex flex-col h-full">
                        {/* Financial Summary */}
                        <div className="flex-shrink-0">
                            <FinancialSummaryCard />
                        </div>

                        {/* Activity Log (Moved to side widget) */}
                        <div className="flex-1 min-h-[400px]">
                            <RecentActivity />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Detailed Inventory Table */}
                <div className="h-[700px]">
                    <InventoryTable
                        data={inventoryData}
                        onOpenAddMaterial={() => setIsAddMaterialOpen(true)}
                        onOpenCreatePO={() => setIsCreatePOOpen(true)}
                    />
                </div>

                {/* Modals */}
                <AddMaterialModal
                    isOpen={isAddMaterialOpen}
                    onClose={() => setIsAddMaterialOpen(false)}
                    onAdd={handleAddMaterial}
                />
                <CreatePOModal
                    isOpen={isCreatePOOpen}
                    onClose={() => setIsCreatePOOpen(false)}
                    onCreate={handleCreatePO}
                />
            </div>
        </DashboardLayout>
    );
};

export default ManagementDashboard;
