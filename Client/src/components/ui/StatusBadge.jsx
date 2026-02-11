import React from 'react';

const StatusBadge = ({ status }) => {

    // Normalize status to handle case insensitivity
    const normalizedStatus = status?.toLowerCase();

    let styles = 'bg-slate-100 text-slate-800';
    let label = status;

    switch (normalizedStatus) {
        case 'normal':
        case 'in stock':
        case 'active':
        case 'completed':
            styles = 'bg-emerald-100 text-emerald-800 border border-emerald-200';
            break;
        case 'low':
        case 'warning':
        case 'pending':
        case 'delayed':
            styles = 'bg-amber-100 text-amber-800 border border-amber-200';
            break;
        case 'critical':
        case 'out of stock':
        case 'inactive':
        case 'cancelled':
            styles = 'bg-red-100 text-red-800 border border-red-200';
            break;
        default:
            styles = 'bg-slate-100 text-slate-800 border border-slate-200';
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
            {label}
        </span>
    );
};

export default StatusBadge;
