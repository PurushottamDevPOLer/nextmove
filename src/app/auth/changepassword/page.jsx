"use client";
import React, { useState } from 'react';
export default function ChangePassword() {
    const [currentpassword, setCurrentPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
                            Change Password
                        </h2>
                    </div>
                    <div className="relative flex flex-col">
                        <label htmlFor='currentpassword' className="text-sm font-medium text-gray-700 mb-1">
                            Current Password <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id='currentpassword'
                            type={showPassword ? 'text' : 'Current Password'}
                            value={currentpassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter your current password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {/* {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />} */}
                        </button>
                    </div>
                    <div className="relative flex flex-col">
                        <label htmlFor='newpassword' className="text-sm font-medium text-gray-700 mb-1">
                            New Password <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id='newpassword'
                            type={showPassword ? 'text' : 'password'}
                            value={newpassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter your new password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {/* {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />} */}
                        </button>
                    </div>
                    <div className="relative flex flex-col">
                        <label htmlFor='confirmpassword' className="text-sm font-medium text-gray-700 mb-1">
                            Confirm Password <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            id='confirmpassword'
                            type={showPassword ? 'text' : 'password'}
                            value={confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your new password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm pr-12"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {/* {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />} */}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 px-6 py-3 text-base shadow-lg transform hover:scale-105"
                    >
                        {isLoading ? 'Changing Password...' : 'Change Password'}
                    </button>
                </div>
            </div>
        </>
    )
}