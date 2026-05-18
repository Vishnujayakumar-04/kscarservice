"use client";

import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp } from "react-icons/fi";
import CarCard, { Car } from "@/components/CarCard";
import { motion, Variants } from "framer-motion";

// Simulated featured cars data
const FEATURED_CARS: Car[] = [
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
            alt="Premium Cars"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6">
              <span className="bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase text-slate-300">
                Premium Dealership
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
              Discover <br /><span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">Excellence.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed font-medium max-w-2xl">
              Curated pre-owned luxury and premium cars sourced across India, delivered to Karaikal.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/cars"
                className="bg-red-600/90 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-red-500 transition-all flex items-center justify-center gap-3 text-lg shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.5)] hover:-translate-y-1"
              >
                Explore Collection <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-slate-950 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">The KS Standard</h2>
            <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">We redefine the pre-owned car buying experience.</p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-10 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <FiCheckCircle size={40} />,
                title: "Certified Integrity",
                desc: "Every car undergoes a rigorous multi-point inspection and strict legal verification.",
              },
              {
                icon: <FiTrendingUp size={40} />,
                title: "Unmatched Value",
                desc: "Direct sourcing from North India ensures premium condition at unbeatable local prices.",
              },
              {
                icon: <FiShield size={40} />,
                title: "White-Glove Service",
                desc: "From negotiation to name transfer, experience a completely frictionless process.",
              },
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-black/50 p-10 rounded-3xl text-center hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-white/10 group shadow-2xl">
                <div className="w-20 h-20 bg-slate-900 border border-white/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all duration-500 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg line-clamp-3">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 lg:py-32 bg-black relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Showcase</h2>
              <div className="w-24 h-1 bg-red-600 mt-6 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            </div>
            <Link
              href="/cars"
              className="hidden sm:flex items-center gap-2 text-slate-300 font-bold hover:text-white transition-colors group tracking-wide uppercase text-sm"
            >
              View Full Showroom <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {FEATURED_CARS.map((car) => (
              <motion.div key={car.id} variants={fadeInUp}>
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center sm:hidden">
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 text-white font-bold bg-white/10 border border-white/20 px-8 py-4 rounded-xl shadow-sm hover:bg-white/20 transition-all uppercase tracking-wider text-sm"
            >
              View Full Showroom <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
