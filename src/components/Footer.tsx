"use client";

import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 text-slate-300 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    {/* Brand & About */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block bg-white/5 border border-white/10 p-2.5 rounded-2xl h-fit w-fit hover:bg-white/10 transition-colors">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo.jpg"
                                alt="KS CAR POINT Logo"
                                className="h-12 w-auto object-contain rounded-md"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Premium pre-owned cars from Delhi, Haryana, and Uttar Pradesh, brought directly to Karaikal, Pondicherry at affordable prices.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:border-red-500 hover:text-white transition-all shadow-lg">
                                <FiFacebook size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:border-red-500 hover:text-white transition-all shadow-lg">
                                <FiInstagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:border-red-500 hover:text-white transition-all shadow-lg">
                                <FiTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "Browse Cars", path: "/cars" },
                                { name: "About Us", path: "/about" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="text-slate-400 hover:text-red-400 font-medium transition-colors flex items-center group text-[15px]"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-3 opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 shadow-sm shadow-red-500/50"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Info</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start space-x-4 text-slate-400">
                                <div className="mt-1 bg-white/5 border border-white/10 p-2.5 rounded-xl text-red-500">
                                    <FiMapPin size={18} />
                                </div>
                                <span className="text-[15px] leading-relaxed">
                                    123 Main Street, Karaikal, Pondicherry 609602
                                </span>
                            </li>
                            <li className="flex items-center space-x-4 text-slate-400">
                                <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-red-500">
                                    <FiPhone size={18} />
                                </div>
                                <span className="text-[15px]">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-4 text-slate-400">
                                <div className="bg-white/5 border border-white/10 p-2.5 rounded-xl text-red-500">
                                    <FiMail size={18} />
                                </div>
                                <span className="text-[15px]">info@kscarpoint.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Newsletter</h3>
                        <p className="text-slate-400 text-[15px] mb-6 leading-relaxed">
                            Subscribe to get updates on our latest curated inventory.
                        </p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 text-white px-5 py-3.5 rounded-l-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full text-[15px] placeholder:text-slate-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-500 px-6 py-3.5 rounded-r-xl text-[15px] font-bold transition-colors shadow-[0_0_15px_rgba(220,38,38,0.2)] text-white"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} KS_CAR_POINT. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
