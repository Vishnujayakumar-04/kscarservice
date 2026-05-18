"use client";

import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent! We'll get back to you soon.");
    };

    return (
        <div className="bg-black min-h-screen py-16 lg:py-24 selection:bg-red-600 selection:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-center mb-16 lg:mb-20"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Have a question or want to visit our showroom? Reach out to us using the details below or drop us a message.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="bg-slate-950 text-white p-10 lg:p-12 rounded-3xl shadow-[0_0_30px_rgba(220,38,38,0.05)] border border-white/10 h-full flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-red-900/50 rounded-full opacity-10 blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl lg:text-4xl font-extrabold mb-10 tracking-tight">Get in Touch</h2>

                                <div className="space-y-10">
                                    <div className="flex items-start group">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-500 mr-6 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                            <FiMapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-2 text-white">Showroom Location</h3>
                                            <p className="text-slate-400 leading-relaxed font-medium">
                                                123 Main Street<br />
                                                Karaikal, Pondicherry<br />
                                                609602, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center group">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-500 mr-6 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                            <FiPhone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-white">Phone / WhatsApp</h3>
                                            <p className="text-slate-400 font-medium">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center group">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-500 mr-6 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                            <FiMail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-white">Email</h3>
                                            <p className="text-slate-400 font-medium">info@kscarpoint.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center group">
                                        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-red-500 mr-6 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                            <FiClock size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1 text-white">Working Hours</h3>
                                            <p className="text-slate-400 font-medium">Mon - Sun: 9:00 AM - 8:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-slate-950 p-10 lg:p-12 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 h-full hover:border-white/20 transition-all">
                            <h2 className="text-3xl font-black text-white mb-10 tracking-tight">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 bg-white/5 focus:bg-white/10 transition-all text-white font-medium placeholder:text-slate-600 text-lg hover:border-white/20"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 bg-white/5 focus:bg-white/10 transition-all text-white font-medium placeholder:text-slate-600 text-lg hover:border-white/20"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 bg-white/5 focus:bg-white/10 transition-all text-white font-medium placeholder:text-slate-600 text-lg hover:border-white/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 bg-white/5 focus:bg-white/10 transition-all text-white font-medium placeholder:text-slate-600 text-lg hover:border-white/20"
                                            placeholder="+91"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Message</label>
                                    <textarea
                                        required
                                        rows={6}
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 bg-white/5 focus:bg-white/10 transition-all resize-none text-white font-medium placeholder:text-slate-600 text-lg hover:border-white/20"
                                        placeholder="Tell us what you're looking for..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-red-600 text-white px-10 py-5 rounded-xl font-bold w-full md:w-auto hover:bg-red-500 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(220,38,38,0.3)] text-lg tracking-wide uppercase"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
