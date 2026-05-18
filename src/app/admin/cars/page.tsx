"use client";

import { FiEdit2, FiTrash2, FiSearch, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

// Mock data
const INITIAL_CARS = [
    { id: "1", brand: "Hyundai", model: "Creta", year: 2021, price: 1650000, status: "available" },
    { id: "2", brand: "Honda", model: "City", year: 2020, price: 1150000, status: "available" },
    { id: "3", brand: "Maruti", model: "Swift", year: 2022, price: 780000, status: "available" },
    { id: "6", brand: "Kia", model: "Seltos", year: 2021, price: 1580000, status: "sold" },
];

export default function ManageCarsPage() {
    const [cars, setCars] = useState(INITIAL_CARS);
    const [searchTerm, setSearchTerm] = useState("");

    const formatPrice = (p: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(p);

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            setCars(cars.filter(c => c.id !== id));
        }
    };

    const markSold = (id: string) => {
        setCars(cars.map(c => c.id === id ? { ...c, status: "sold" } : c));
    };

    const filtered = cars.filter(c => `${c.brand} ${c.model}`.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">Manage Inventory</h1>
                    <p className="text-slate-500 mt-2">Manage all your vehicle listings here.</p>
                </div>
                <Link href="/admin/cars/new" className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition">
                    + Add New Car
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100">
                    <div className="relative max-w-md">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search inventory..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-slate-50"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-sm">
                                <th className="p-4 font-semibold">Make & Model</th>
                                <th className="p-4 font-semibold">Year</th>
                                <th className="p-4 font-semibold">Price</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((car) => (
                                <tr key={car.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                    <td className="p-4">
                                        <div className="font-bold text-slate-900">{car.brand} {car.model}</div>
                                    </td>
                                    <td className="p-4 text-slate-600">{car.year}</td>
                                    <td className="p-4 font-semibold text-slate-900">{formatPrice(car.price)}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${car.status === "available" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                            {car.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            {car.status === "available" && (
                                                <button onClick={() => markSold(car.id)} title="Mark as Sold" className="text-green-600 hover:bg-green-50 p-2 rounded-lg transition">
                                                    <FiCheckCircle size={18} />
                                                </button>
                                            )}
                                            <button title="Edit" className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition">
                                                <FiEdit2 size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(car.id)} title="Delete" className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition">
                                                <FiTrash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filtered.length === 0 && (
                        <div className="p-10 text-center text-slate-500 font-medium">No vehicles found.</div>
                    )}
                </div>
            </div>
        </div>
    );
}
