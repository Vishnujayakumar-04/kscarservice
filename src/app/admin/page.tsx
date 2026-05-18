"use client";

import { FiTrendingUp, FiTruck, FiMessageSquare, FiDollarSign } from "react-icons/fi";
import Link from "next/link";

export default function AdminDashboardPage() {
    const stats = [
        { label: "Total Cars", value: "24", icon: <FiTruck size={24} />, color: "bg-blue-100 text-blue-600" },
        { label: "Available Inventory", value: "18", icon: <FiTrendingUp size={24} />, color: "bg-green-100 text-green-600" },
        { label: "Sold this month", value: "6", icon: <FiDollarSign size={24} />, color: "bg-purple-100 text-purple-600" },
        { label: "New Enquiries", value: "12", icon: <FiMessageSquare size={24} />, color: "bg-orange-100 text-orange-600" },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900">Dashboard</h1>
                <p className="text-slate-500 mt-2">Welcome back to the KS_CAR_POINT dealer panel.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                        <div>
                            <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                        </div>
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Recent Enquiries */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 or flow-hidden">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Recent Enquiries</h2>
                        <Link href="/admin/enquiries" className="text-red-600 text-sm font-semibold hover:underline">View All</Link>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-slate-900">Rahul Kumar</p>
                                    <p className="text-sm text-slate-500">Interested in: Hyundai Creta</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-400 font-medium mb-1">2 hours ago</p>
                                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">New</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
