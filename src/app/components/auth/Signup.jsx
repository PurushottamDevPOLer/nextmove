"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "@/app/firebase/config";

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    // const [error, setError] = useState < string | null > (null);
    // const [message, setMessage] = useState < string | null > (null);
    // const [role, setRole] = useState < UserRole > ('volunteer');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    let role = 'admin'
    const handleRegister = async (event) => {
        e.preventDefault();
        setError('');
        setMessage(null)
        setIsLoading(true);

        if (password !== confirmpassword) {
            setError("Password does not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            await sendEmailVerification(user);

            //Temporarily store user data in local storage
            localStorage.setItem(
                "registrationData",
                JSON.stringify({
                    firstName,
                    lastName,
                    gender,
                    email,
                })
            );
            setMessage(
                "Registration successful! Please check your email for verification."
            );

            //Clear form fields
            setFirstName("");
            setLastName("");
            setGender("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
        catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred.");
            }
        }
    }
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
                            Sign up to Fleet Manager
                        </h2>
                    </div>

                    <div className="mt-8 space-y-6">

                        <form className="space-y-6" onSubmit={handleRegister}>
                            <div className="flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                    First Name <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={role === 'admin' ? 'admin@fleet.com' : 'volunteer@hotel.com'}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                    Last Name <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={role === 'admin' ? 'admin@fleet.com' : 'volunteer@hotel.com'}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                    Gender <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={role === 'admin' ? 'admin@fleet.com' : 'volunteer@hotel.com'}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='email' className="text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={role === 'admin' ? 'admin@fleet.com' : 'volunteer@hotel.com'}
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
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
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
                                <label htmlFor='password' className="text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
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
                                {isLoading ? 'Signing up...' : 'Sign up'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}