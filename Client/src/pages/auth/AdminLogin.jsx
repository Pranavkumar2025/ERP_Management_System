import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat, Lock, Mail, ArrowLeft, AlertCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user types
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            const { email, password } = formData;

            // All admins use the same password for this static implementation
            console.log('Login attempt:', { email, password }); // Debug log
            if (password === '123456') {
                if (email === 'mgmt@cmp.com') {
                    console.log('Login successful: Management Admin');
                    navigate('/dashboard/management');
                    return;
                } else if (email === 'finance@cmp.com') {
                    console.log('Login successful: Finance Admin');
                    navigate('/dashboard/finance');
                    return;
                } else if (email === 'project@cmp.com') {
                    console.log('Login successful: Project Admin');
                    navigate('/dashboard/project');
                    return;
                } else if (email === 'compliance@cmp.com') {
                    console.log('Login successful: Compliance Admin');
                    navigate('/dashboard/compliance');
                    return;
                }
            }

            // If we get here, credentials were invalid
            setError('Invalid credentials. Please contact your system administrator.');
            setLoading(false);
        }, 1000); // 1s delay for realistic feel
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 bg-amber-400 rounded-sm flex items-center justify-center mb-4">
                        <HardHat className="h-8 w-8 text-slate-900" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-slate-900 tracking-tight">
                        Admin Portal
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Sign in to access your dashboard
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white py-8 px-4 shadow-xl rounded-sm sm:px-10 border border-slate-200">
                    <form className="space-y-6" onSubmit={handleSubmit}>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                Email Address
                            </label>
                            <div className="mt-1 relative rounded-sm shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full pl-10 sm:text-sm border-slate-300 rounded-sm focus:ring-amber-500 focus:border-amber-500 py-2.5 bg-slate-50 border placeholder-slate-400 text-slate-900"
                                    placeholder="admin@cmp.com"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <div className="mt-1 relative rounded-sm shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-slate-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full pl-10 sm:text-sm border-slate-300 rounded-sm focus:ring-amber-500 focus:border-amber-500 py-2.5 bg-slate-50 border placeholder-slate-400 text-slate-900"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="rounded-sm bg-red-50 p-4 border border-red-200">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium text-red-800">
                                            Login Failed
                                        </h3>
                                        <div className="mt-1 text-sm text-red-700">
                                            <p>{error}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2.5 px-4 rounded-sm shadow-md"
                            >
                                {loading ? 'Authenticating...' : 'Sign In'}
                            </Button>
                        </div>
                    </form>

                    {/* Back Link */}
                    <div className="mt-6 text-center">
                        <a href="/" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </a>
                    </div>

                </div>

                {/* Footer Note */}
                <div className="text-center text-xs text-slate-400">
                    &copy; 2026 Contractor Management Platform. All rights reserved.
                </div>

            </div>
        </div>
    );
};

export default AdminLogin;
