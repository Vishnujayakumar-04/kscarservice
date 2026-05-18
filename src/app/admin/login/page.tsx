"use client";

import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin");
        } catch (err: any) {
            setError(err.message || "Failed to sign in. Please check your credentials.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Logo */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo.jpg"
                            alt="KS CAR POINT Logo"
                            className="h-16 w-auto object-contain rounded-md"
                        />
                    </Link>
                    <p className="text-slate-500 font-medium mt-6">Dealer Administration Panel</p>
                </div>

                {/* Login Form */}
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Sign In</h2>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-semibold border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 focus:bg-white transition-colors"
                                    placeholder="admin@kscarpoint.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50 focus:bg-white transition-colors"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-red-600 text-white rounded-xl py-4 font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/20 disabled:opacity-70 flex items-center justify-center"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "Access Dashboard"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-red-600 transition">
                            &larr; Back to Website
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-slate-400 text-sm mt-8">
                    &copy; {new Date().getFullYear()} KS_CAR_POINT. All rights reserved.
                </p>
            </div>
        </div>
    );
}
