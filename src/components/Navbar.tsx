"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Cars", path: "/cars" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-black/80 backdrop-blur-lg py-4 border-white/10 shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent py-6 border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logo.jpg"
                            alt="KS CAR POINT Logo"
                            className="h-10 md:h-12 w-auto object-contain rounded-md"
                        />
                    </Link>

                    <div className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`text-[15px] font-medium tracking-wide transition-all ${pathname === link.path
                                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                    : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-red-600/90 text-white px-7 py-2.5 rounded-full font-bold tracking-wide hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-red-500 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden animate-slideDown">
                    <div className="px-6 py-8 space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`block text-xl font-medium tracking-wide ${pathname === link.path ? "text-white" : "text-slate-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-6 mt-4 border-t border-white/10">
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-red-600/90 text-white px-6 py-4 rounded-xl font-bold tracking-wide hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
