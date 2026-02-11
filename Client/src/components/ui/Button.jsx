import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "border border-transparent text-white bg-slate-900 hover:bg-slate-800 hover:shadow-lg focus:ring-slate-900",
        secondary: "border border-transparent text-slate-900 bg-amber-400 hover:bg-amber-500 hover:shadow-md focus:ring-amber-500",
        outline: "border-2 border-slate-200 text-slate-700 bg-transparent hover:border-slate-900 hover:text-slate-900 focus:ring-slate-900",
        ghost: "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:ring-slate-500"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
