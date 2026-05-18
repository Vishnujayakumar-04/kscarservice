"use client";

import Link from "next/link";
import { FiMapPin, FiCalendar, FiSettings, FiDroplet } from "react-icons/fi";

export interface Car {
    id: string;
    brand: string;
    model: string;
    variant: string;
    year: number;
    fuel: string;
    transmission: string;
    kmDriven: number;
    price: number;
    location: string;
    image: string; // we'll just take the first image for the card
    status: "available" | "sold";
}

export default function CarCard({ car }: { car: Car }) {
    const formattedPrice = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(car.price);

    return (
        <div className="bg-black/40 rounded-3xl shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-500 overflow-hidden border border-white/10 hover:border-white/20 group flex flex-col h-full hover:-translate-y-2 backdrop-blur-sm">
            {/* Image Container */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
                {car.status === "sold" && (
                    <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                        Sold Out
                    </div>
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={car.image || "https://placehold.co/600x400/1e293b/ffffff?text=No+Image"}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
                        <FiMapPin className="text-red-500" /> {car.location}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-black text-white mb-1 line-clamp-1 tracking-tight">
                    {car.brand} {car.model}
                </h3>
                <p className="text-slate-400 text-[15px] mb-6 line-clamp-1 font-medium">{car.variant}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-3 mb-6">
                    <div className="flex items-center text-slate-300 font-semibold text-sm">
                        <div className="bg-white/5 border border-white/10 p-2 rounded-lg mr-3 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <FiCalendar size={16} />
                        </div>
                        {car.year}
                    </div>
                    <div className="flex items-center text-slate-300 font-semibold text-sm">
                        <div className="bg-white/5 border border-white/10 p-2 rounded-lg mr-3 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <FiSettings size={16} />
                        </div>
                        {car.transmission}
                    </div>
                    <div className="flex items-center text-slate-300 font-semibold text-sm">
                        <div className="bg-white/5 border border-white/10 p-2 rounded-lg mr-3 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <FiDroplet size={16} />
                        </div>
                        {car.fuel}
                    </div>
                    <div className="flex items-center text-slate-300 font-semibold text-sm">
                        <div className="bg-white/5 border border-white/10 p-2 rounded-lg mr-3 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                            <span className="text-[10px] font-black tracking-widest">KM</span>
                        </div>
                        {car.kmDriven.toLocaleString()}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto flex justify-between items-center pt-5 border-t border-white/10">
                    <span className="text-2xl font-black text-white tracking-tight">{formattedPrice}</span>
                    <Link
                        href={`/cars/${car.id}`}
                        className="text-white font-bold text-[13px] tracking-wider uppercase bg-red-600 hover:bg-red-500 px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
