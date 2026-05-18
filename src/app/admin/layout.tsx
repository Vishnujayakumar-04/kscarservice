"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiHome, FiGrid, FiPlusSquare, FiMessageCircle, FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
                if (pathname !== "/admin/login") {
                    router.push("/admin/login");
                }
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [pathname, router]);

    const handleSignOut = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    const navigation = [
        { name: "Dashboard", href: "/admin", icon: FiHome },
        { name: "Manage Cars", href: "/admin/cars", icon: FiGrid },
        { name: "Add New Car", href: "/admin/cars/new", icon: FiPlusSquare },
        { name: "Enquiries", href: "/admin/enquiries", icon: FiMessageCircle },
    ];

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    // If we aren't loading, aren't on the login page, but have no user, don't render the dashboard frame
    if (!user && pathname !== "/admin/login") return null;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row shadow-inner pt-16">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-slate-900 text-white flex-shrink-0 md:h-[calc(100vh-64px)] md:sticky md:top-16 shadow-xl z-20 overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-xl font-black mb-8 px-2 tracking-wide text-white">
                        Dealer<span className="text-red-500">Panel</span>
                    </h2>
                    <nav className="space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive
                                        ? "bg-red-600 text-white font-bold shadow-lg shadow-red-600/20"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                        }`}
                                >
                                    <Icon size={20} className={isActive ? "text-white" : "text-slate-400"} />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                <div className="absolute bottom-0 w-full p-6 border-t border-slate-800">
                    <button
                        onClick={handleSignOut}
                        className="flex items-center space-x-3 text-slate-400 hover:text-white px-4 py-2 w-full transition-colors group"
                    >
                        <FiLogOut size={20} className="group-hover:text-red-500 transition-colors" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-x-hidden md:h-[calc(100vh-64px)] md:overflow-y-auto">
                <div className="p-6 md:p-10 max-w-6xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
