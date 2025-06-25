'use client';

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';


// Inline Type
let UserRole = 'admin' | 'accountant';

export default function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = () => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);


            if (
                role === 'admin' &&
                email === 'admin@fleet.com'
            ) {
                router.push('/admin'); // route to Admin dashboard
            } else if (
                role === 'accountant'
            ) {
                router.push('/accountant'); // route to Accountant dashboard
            } else {
                setError('Invalid email, password, or role.');
            }
        }, 1000);
    };
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl">NM</span>
                            </div>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to Fleet Manager
                        </h2>

                    </div>


                    <div className="mt-8 space-y-6">
                        {/* Role Selection */}
                        <div className="flex space-x-4">
                            <button
                                type="button"
                                onClick={() => setRole('admin')}
                                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${role === 'admin'
                                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                                    }`}
                            >
                                <span className="text-sm font-medium">Admin</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole('accountant')}
                                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${role === 'accountant'
                                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 shadow-lg'
                                    : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-md'
                                    }`}
                            >

                                <span className="text-sm font-medium">Accountant</span>
                            </button>
                        </div>


                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={role === 'admin' ? 'admin@fleet.com' : 'accountant@fleet.com'}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>


                            <div className="relative flex flex-col">
                                <label htmlFor='password' className="text-sm font-medium text-gray-700 mb-1">
                                    Password <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='password'
                                    type={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                                />
                            </div>


                            {error && (
                                <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border border-red-200">
                                    {error}
                                </div>
                            )}


                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 px-6 py-3 text-base shadow-lg transform hover:scale-105"
                            >
                                {isLoading ? 'Signing in...' : 'Sign in'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}