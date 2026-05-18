"use client";

import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import Link from "next/link";

export default function AddCarPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate upload delay
        setTimeout(() => {
            alert("Car added successfully!");
            setIsSubmitting(false);
            // In a real app we'd redirect to /admin/cars here
        }, 1500);
    };

    return (
        <div>
            <div className="mb-8">
                <div className="text-sm text-slate-500 mb-2 font-medium">
                    <Link href="/admin/cars" className="hover:text-red-600">Inventory</Link> / Add New Car
                </div>
                <h1 className="text-3xl font-black text-slate-900">Add New Vehicle</h1>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Basic Info */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">Basic Information</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Brand</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" placeholder="e.g. Hyundai" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Model</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" placeholder="e.g. Creta" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Variant</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" placeholder="e.g. SX Opt Diesel AT" />
                            </div>
                        </div>
                    </div>

                    {/* Specifications */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">Specifications</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Manufacturing Year</label>
                                <input required type="number" min="2000" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Fuel Type</label>
                                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50">
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="CNG">CNG</option>
                                    <option value="Electric">Electric</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Transmission</label>
                                <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50">
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Kilometers Driven</label>
                                <input required type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" />
                            </div>
                        </div>
                    </div>

                    {/* Pricing & Location */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">Listing Details</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Price (₹)</label>
                                <input required type="number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Current Location</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50" defaultValue="Karaikal" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Detailed Description</label>
                                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 bg-slate-50 resize-none" placeholder="Provide vehicle history, condition, additional features..."></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">Vehicle Images</h2>
                        <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:bg-slate-50 transition cursor-pointer">
                            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiUploadCloud size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-700 mb-2">Select or drag up to 10 images</h3>
                            <p className="text-sm text-slate-500 mb-4">Recommended size: 1600x1200. First image will be the cover.</p>
                            <input type="file" multiple accept="image/*" className="hidden" />
                            <button type="button" className="bg-white border border-slate-200 text-slate-700 px-6 py-2 rounded-lg font-bold hover:bg-slate-50">
                                Browse Files
                            </button>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
                        <Link href="/admin/cars" className="px-8 py-4 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition">
                            Cancel
                        </Link>
                        <button disabled={isSubmitting} type="submit" className="bg-red-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/20 disabled:opacity-70">
                            {isSubmitting ? "Saving..." : "Publish Listing"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
