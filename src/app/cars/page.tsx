"use client";

import { useState } from "react";
import CarCard, { Car } from "@/components/CarCard";
import { FiFilter, FiSearch, FiSliders } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const MOCK_CARS: Car[] = [
    {
        id: "1",
        brand: "Hyundai",
        model: "Creta",
        variant: "SX Opt Diesel AT",
        year: 2021,
        fuel: "Diesel",
        transmission: "Automatic",
        kmDriven: 45000,
        price: 1650000,
        location: "Karaikal",
        image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1600&auto=format&fit=crop",
        status: "available",
    },
    {
        id: "2",
        brand: "Honda",
        model: "City",
        variant: "ZX CVT",
        year: 2020,
        fuel: "Petrol",
        transmission: "Automatic",
        kmDriven: 32000,
        price: 1150000,
        location: "Karaikal",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
        status: "available",
    },
    {
        id: "3",
        brand: "Maruti Suzuki",
        model: "Swift",
        variant: "ZXI Plus",
        year: 2022,
        fuel: "Petrol",
        transmission: "Manual",
        kmDriven: 18000,
        price: 780000,
        location: "Karaikal",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1600&auto=format&fit=crop",
        status: "available",
    },
    {
        id: "4",
        brand: "Tata",
        model: "Nexon",
        variant: "XZA Plus",
        year: 2023,
        fuel: "Petrol",
        transmission: "Automatic",
        kmDriven: 12000,
        price: 1250000,
        location: "Pondicherry",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop",
        status: "available",
    },
    {
        id: "5",
        brand: "Toyota",
        model: "Innova Crysta",
        variant: "2.4 ZX 7 STR",
        year: 2019,
        fuel: "Diesel",
        transmission: "Manual",
        kmDriven: 85000,
        price: 1950000,
        location: "Karaikal",
        image: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=1600&auto=format&fit=crop",
        status: "available",
    },
    {
        id: "6",
        brand: "Kia",
        model: "Seltos",
        variant: "GTX Plus",
        year: 2021,
        fuel: "Petrol",
        transmission: "Automatic",
        kmDriven: 28000,
        price: 1580000,
        location: "Pondicherry",
        image: "https://images.unsplash.com/photo-1605810738600-60586cc84d72?q=80&w=1600&auto=format&fit=crop",
        status: "sold",
    },
];

export default function CarsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    // Filters State
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedFuel, setSelectedFuel] = useState("All");
    const [selectedTransmission, setSelectedTransmission] = useState("All");

    const brands = ["All", ...Array.from(new Set(MOCK_CARS.map((c) => c.brand)))];
    const fuels = ["All", "Petrol", "Diesel", "CNG", "Electric"];
    const transmissions = ["All", "Manual", "Automatic"];

    const filteredCars = MOCK_CARS.filter((car) => {
        const matchesSearch = `${car.brand} ${car.model} ${car.variant}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrand === "All" || car.brand === selectedBrand;
        const matchesFuel = selectedFuel === "All" || car.fuel === selectedFuel;
        const matchesTrans =
            selectedTransmission === "All" || car.transmission === selectedTransmission;

        return matchesSearch && matchesBrand && matchesFuel && matchesTrans;
    });

    return (
        <div className="bg-black min-h-screen py-10 lg:py-16 selection:bg-red-600 selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Area */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full md:w-auto">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Available Inventory</h1>
                        <p className="text-slate-400 mt-2 text-lg font-medium tracking-wide">Showing {filteredCars.length} premium vehicles</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-3">
                        <div className="relative w-full md:w-80">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search inventory..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 bg-white/5 shadow-sm text-white placeholder:text-slate-500 transition-all font-medium hover:border-white/20"
                            />
                        </div>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden bg-white/5 border border-white/10 p-4 rounded-xl shadow-sm text-slate-300 hover:bg-white/10 flex items-center justify-center flex-shrink-0 transition-colors"
                        >
                            <FiSliders size={24} />
                        </button>
                    </div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div
                        className={`${showFilters ? "block" : "hidden"
                            } lg:block w-full lg:w-72 flex-shrink-0 transition-all`}
                    >
                        <div className="bg-slate-950 p-6 rounded-2xl shadow-sm border border-white/10 sticky top-24">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                <h2 className="text-lg font-bold flex items-center gap-2 text-white">
                                    <FiFilter /> Filters
                                </h2>
                                <button
                                    onClick={() => {
                                        setSelectedBrand("All");
                                        setSelectedFuel("All");
                                        setSelectedTransmission("All");
                                        setSearchTerm("");
                                    }}
                                    className="text-sm text-red-500 font-semibold hover:text-red-400 hover:underline"
                                >
                                    Reset All
                                </button>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-white mb-3">Brand</h3>
                                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                    {brands.map((brand) => (
                                        <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="brand"
                                                value={brand}
                                                checked={selectedBrand === brand}
                                                onChange={(e) => setSelectedBrand(e.target.value)}
                                                className="w-4 h-4 text-red-600 bg-white/5 border-white/20 focus:ring-red-500 focus:ring-offset-slate-950"
                                            />
                                            <span className="text-slate-400 group-hover:text-white transition-colors">
                                                {brand}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Fuel Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-white mb-3">Fuel Type</h3>
                                <div className="flex flex-wrap gap-2">
                                    {fuels.map((fuel) => (
                                        <button
                                            key={fuel}
                                            onClick={() => setSelectedFuel(fuel)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedFuel === fuel
                                                ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                                                : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            {fuel}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Transmission Filter */}
                            <div>
                                <h3 className="font-semibold text-white mb-3">Transmission</h3>
                                <div className="flex flex-wrap gap-2">
                                    {transmissions.map((trans) => (
                                        <button
                                            key={trans}
                                            onClick={() => setSelectedTransmission(trans)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTransmission === trans
                                                ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                                                : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            {trans}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cars Grid */}
                    <div className="flex-grow">
                        {filteredCars.length > 0 ? (
                            <motion.div
                                className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {filteredCars.map((car) => (
                                    <motion.div key={car.id} variants={fadeUp}>
                                        <CarCard car={car} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="bg-white/5 p-12 rounded-3xl text-center border border-white/10 shadow-sm backdrop-blur-sm">
                                <div className="w-20 h-20 bg-white/5 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiSearch size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">No matching vehicles</h3>
                                <p className="text-slate-400 max-w-sm mx-auto mb-8">
                                    We couldn't find any premium vehicles matching your criteria.
                                </p>
                                <button
                                    onClick={() => {
                                        setSelectedBrand("All");
                                        setSelectedFuel("All");
                                        setSelectedTransmission("All");
                                        setSearchTerm("");
                                    }}
                                    className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-500 transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
