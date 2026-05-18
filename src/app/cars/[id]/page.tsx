import { FiCheck, FiMapPin, FiMessageCircle, FiPhoneCall } from "react-icons/fi";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import { Car } from "@/components/CarCard";
import * as motion from "framer-motion/client";

// Simulated fetch based on ID
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
];

export default async function CarDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Try to find the car
    const car = MOCK_CARS.find((c) => c.id === id) || MOCK_CARS[0];

    const formattedPrice = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(car.price);

    // Additional mock data for detail view
    const carDetails = {
        ...car,
        images: [
            car.image,
            "https://images.unsplash.com/photo-1606131731446-5568d87113aa?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
        ],
        description: `This ${car.year} ${car.brand} ${car.model} is in pristine condition... It comes with full service history and has been thoroughly inspected by our mechanics. Features include climate control, touchscreen infotainment with Apple CarPlay and Android Auto, reverse camera, and more.`,
        features: [
            "Power Steering",
            "Power Windows",
            "Air Conditioning",
            "ABS",
            "Central Locking",
            "Bluetooth Connectivity",
            "Parking Sensors",
        ],
    };

    const whatsappMessage = encodeURIComponent(
        `Hello KS_CAR_POINT, I am interested in the ${car.year} ${car.brand} ${car.model} (${formattedPrice}). Is it available?`
    );

    return (
        <div className="bg-black min-h-screen py-10 lg:py-16 selection:bg-red-600 selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-8 text-sm text-slate-500 font-semibold tracking-wide flex items-center gap-2"
                >
                    <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
                    <span className="text-slate-600">/</span>
                    <Link href="/cars" className="hover:text-red-500 transition-colors">Inventory</Link>
                    <span className="text-slate-600">/</span>
                    <span className="text-white bg-white/10 px-3 py-1 rounded-full shadow-sm border border-white/10 backdrop-blur-sm">{car.brand} {car.model}</span>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Column: Images & Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/3 space-y-10"
                    >
                        {/* Gallery */}
                        <div className="rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-950">
                            <ImageGallery images={carDetails.images} />
                        </div>

                        {/* Description */}
                        <div className="bg-slate-950 p-10 rounded-3xl shadow-sm border border-white/10 hover:border-white/20 transition-all">
                            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Overview</h2>
                            <p className="text-slate-300 leading-relaxed font-medium text-lg">
                                {carDetails.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="bg-slate-950 p-10 rounded-3xl shadow-sm border border-white/10 hover:border-white/20 transition-all">
                            <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">Key Features</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6">
                                {carDetails.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-slate-300 font-semibold group">
                                        <div className="bg-white/5 border border-white/10 p-1.5 rounded-full mr-3 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all">
                                            <FiCheck size={16} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Pricing & Contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/3"
                    >
                        <div className="bg-slate-950 p-8 lg:p-10 rounded-3xl shadow-sm border border-white/10 sticky top-28">
                            {car.status === "sold" && (
                                <div className="bg-red-500/10 text-red-500 text-sm font-extrabold px-5 py-2.5 rounded-xl mb-6 uppercase tracking-wider inline-block border border-red-500/20">
                                    Sold Out
                                </div>
                            )}

                            <p className="text-slate-400 mb-3 font-semibold tracking-wide uppercase text-sm">
                                {car.year} • {car.variant}
                            </p>
                            <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                                {car.brand} {car.model}
                            </h1>

                            <div className="text-5xl font-black text-white mb-8 pb-8 border-b border-white/10 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                {formattedPrice}
                            </div>

                            {/* Quick Specs inline */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Fuel</p>
                                    <p className="font-bold text-white text-lg">{car.fuel}</p>
                                </div>
                                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Transmission</p>
                                    <p className="font-bold text-white text-lg">{car.transmission}</p>
                                </div>
                                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Kilometers</p>
                                    <p className="font-bold text-white text-lg">{car.kmDriven.toLocaleString()} km</p>
                                </div>
                                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
                                    <p className="font-bold text-white text-lg flex items-center">
                                        {car.location}
                                    </p>
                                </div>
                            </div>

                            {/* Contact Actions */}
                            <div className="space-y-4">
                                <a
                                    href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#25D366] hover:bg-[#20b858] text-black py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg shadow-[#25D366]/30 text-lg tracking-wide uppercase"
                                >
                                    <FiMessageCircle size={24} />
                                    WhatsApp Dealer
                                </a>
                                <a
                                    href="tel:+919876543210"
                                    className="w-full bg-red-600 hover:bg-red-500 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 shadow-lg shadow-red-600/30 text-lg tracking-wide uppercase"
                                >
                                    <FiPhoneCall size={24} />
                                    Call Dealer
                                </a>
                            </div>

                            <div className="mt-8 text-center bg-white/5 rounded-2xl p-4 border border-white/10">
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                                    Showroom Location
                                </p>
                                <p className="text-white font-bold flex items-center justify-center gap-2">
                                    <FiMapPin className="text-red-500" size={18} />
                                    KS_CAR_POINT, Karaikal
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
