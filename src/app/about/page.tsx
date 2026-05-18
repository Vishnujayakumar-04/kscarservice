"use client";

import Image from "next/image";
import { FiAward, FiHeart, FiTrendingUp, FiUsers, FiCheckCircle } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen selection:bg-red-600 selection:text-white">
            {/* Hero Header */}
            <section className="bg-slate-900 py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop"
                        alt="Dealership"
                        className="w-full h-full object-cover mix-blend-luminosity"
                    />
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">About KS<span className="text-red-500">_</span>CAR_POINT</motion.h1>
                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium drop-shadow-lg">
                        We are Karaikal's premier destination for high-quality, pre-owned cars sourced from across North India.
                    </motion.p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-8 tracking-tight">Our Story</motion.h2>
                        <motion.div variants={fadeUp} className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                            <p>
                                Founded with a vision to make premium pre-owned cars accessible to the people of Karaikal, Pondicherry, and surrounding regions, KS_CAR_POINT bridges the gap between quality North Indian vehicles and South Indian buyers.
                            </p>
                            <p>
                                We specialize in sourcing top-tier used cars primarily from Delhi, Haryana, and Uttar Pradesh. Our team rigorously inspects every vehicle, ensuring only the best conditioned cars make it to our showroom and eventually to your driveway.
                            </p>
                            <p>
                                By cutting out the middlemen and managing logistics efficiently, we pass on substantial savings to our customers, offering unbeatable prices without compromising on quality or peace of mind.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-12 grid grid-cols-2 gap-6 md:gap-8">
                            <div className="border-l-4 border-red-600 pl-6 bg-slate-950 p-6 rounded-r-2xl border-y border-r border-white/10 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                                <p className="text-4xl font-black text-white mb-1">500<span className="text-red-500">+</span></p>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Happy Customers</p>
                            </div>
                            <div className="border-l-4 border-red-600 pl-6 bg-slate-950 p-6 rounded-r-2xl border-y border-r border-white/10 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                                <p className="text-4xl font-black text-white mb-1">150<span className="text-red-500">+</span></p>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Cars in Stock</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop"
                            alt="Happy customer with new car"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0vw,transparent_50vw)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black text-white tracking-tight">Our Core Values</h2>
                        <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)]" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: <FiCheckCircle size={36} />,
                                title: "Quality First",
                                desc: "We never compromise on the mechanical condition and legal clarity of our vehicles."
                            },
                            {
                                icon: <FiHeart size={36} />,
                                title: "Customer Centric",
                                desc: "Your satisfaction is our ultimate goal. We guide you transparently through the whole process."
                            },
                            {
                                icon: <FiTrendingUp size={36} />,
                                title: "Value for Money",
                                desc: "By sourcing smartly, we provide premium cars at prices unmatched in the local market."
                            },
                            {
                                icon: <FiUsers size={36} />,
                                title: "Trust & Integrity",
                                desc: "Honesty in every deal. No hidden charges, no tampered meters, complete transparency."
                            }
                        ].map((val, idx) => (
                            <motion.div key={idx} variants={fadeUp} className="bg-black/50 p-10 rounded-3xl shadow-lg border border-white/10 text-center hover:bg-slate-900 hover:border-white/20 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm group">
                                <div className="w-20 h-20 bg-white/5 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{val.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">{val.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
