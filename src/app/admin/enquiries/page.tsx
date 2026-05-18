"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiCalendar, FiTrash2 } from "react-icons/fi";

const MOCK_ENQUIRIES = [
    { id: "1", name: "Rahul Kumar", phone: "9876543210", email: "rahul@example.com", car: "Hyundai Creta 2021", message: "Is this car still available? I would like to schedule a test drive.", date: "2023-10-25", isNew: true },
    { id: "2", name: "Priya Sharma", phone: "9123456780", email: "priya@example.com", car: "Honda City 2020", message: "What is the final price you can offer? Any finance options?", date: "2023-10-24", isNew: true },
    { id: "3", name: "Arun M", phone: "9988776655", email: "arun@example.com", car: "General Enquiry", message: "Do you have any automatic hatchbacks under 8 lakhs?", date: "2023-10-22", isNew: false },
];

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState(MOCK_ENQUIRIES);

    const handleDelete = (id: string) => {
        if (window.confirm("Delete this enquiry?")) {
            setEnquiries(enquiries.filter(e => e.id !== id));
        }
    };

    const markRead = (id: string) => {
        setEnquiries(enquiries.map(e => e.id === id ? { ...e, isNew: false } : e));
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-900">Customer Enquiries</h1>
                <p className="text-slate-500 mt-2">Manage all queries from potential buyers.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
                {enquiries.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 font-medium">No enquiries found.</div>
                ) : (
                    <div className="space-y-6">
                        {enquiries.map((enquiry) => (
                            <div
                                key={enquiry.id}
                                className={`p-6 rounded-2xl border transition-all ${enquiry.isNew ? 'bg-red-50/50 border-red-100 shadow-sm' : 'bg-white border-slate-200 hover:shadow-md'}`}
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-lg font-bold text-slate-900">{enquiry.name}</h3>
                                            {enquiry.isNew && <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wider">New</span>}
                                        </div>
                                        <p className="text-sm font-semibold text-slate-600">Re: {enquiry.car}</p>
                                    </div>
                                    <div className="text-slate-500 text-sm font-medium flex items-center gap-2">
                                        <FiCalendar /> {new Date(enquiry.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </div>
                                </div>

                                <div className="bg-white/60 p-4 rounded-xl mb-6 text-slate-700 italic border border-slate-100">
                                    "{enquiry.message}"
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                    <div className="flex gap-4">
                                        <a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-red-600 transition">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><FiPhone /></div>
                                            {enquiry.phone}
                                        </a>
                                        {enquiry.email && (
                                            <a href={`mailto:${enquiry.email}`} className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-red-600 transition">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"><FiMail /></div>
                                                Email
                                            </a>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {enquiry.isNew && (
                                            <button onClick={() => markRead(enquiry.id)} className="text-sm font-bold text-slate-500 hover:text-slate-900 transition">
                                                Mark as Read
                                            </button>
                                        )}
                                        <button onClick={() => handleDelete(enquiry.id)} className="text-red-600 hover:bg-red-50 w-8 h-8 rounded-lg flex items-center justify-center transition" title="Delete">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
