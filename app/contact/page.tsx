"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Upload,
    Send,
    MapPin,
    Clock,
    ArrowRight,
    Sparkles,
    CheckCircle,
    Layers,
    Zap,
} from "lucide-react";

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
    }),
};

const serviceOptions = [
    "Solar PV Permit Package",
    "Solar Sales Proposal",
    "Architectural BIM (LOD 300+)",
    "MEP Coordination",
    "Structural Modeling",
    "Clash Detection",
    "As-Built / Shop Drawings",
    "EV Charging Design",
    "Battery Storage Design",
    "Other",
];

export default function Contact() {
    const [activeTab, setActiveTab] = useState<"quote" | "partner">("quote");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(
            "Thank you! This is a demo form. In production, this would send an email."
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
            {/* ═══ HERO SECTION ═══ */}
            <section className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] flex items-center overflow-hidden bg-slate-900">
                <Image
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
                    alt="Contact Soltic engineering team"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-blue-900/70 z-[1]" />

                {/* Animated blobs */}
                <div className="absolute inset-0 z-[2]">
                    <motion.div
                        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-16 md:py-20">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-5 sm:mb-6 backdrop-blur-sm"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                            <span className="text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
                                Get in Touch
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.7 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-5 text-white"
                        >
                            Let&apos;s Build Something{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Extraordinary
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.7 }}
                            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed"
                        >
                            Ready to start a project? Tell us about your needs and we&apos;ll
                            get back to you within 24 hours.
                        </motion.p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-white to-transparent z-[3]" />
            </section>

            {/* ═══ MAIN CONTENT ═══ */}
            <section className="py-10 sm:py-14 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* ── Left: Contact Info Cards ── */}
                        <div className="lg:col-span-1 space-y-4 sm:space-y-5 order-2 lg:order-1">
                            {/* Contact cards */}
                            {[
                                {
                                    icon: Mail,
                                    title: "Email Us",
                                    subtitle: "General inquiries & project submission",
                                    value: "projects@soltic.com",
                                    href: "mailto:projects@soltic.com",
                                    color: "bg-blue-50 text-secondary",
                                    iconBg: "bg-blue-100",
                                },
                                {
                                    icon: Phone,
                                    title: "Call Us",
                                    subtitle: "Mon-Fri, 9am - 6pm GMT",
                                    value: "+44 7436 900601",
                                    href: "tel:+447436900601",
                                    color: "bg-cyan-50 text-accent",
                                    iconBg: "bg-cyan-100",
                                },
                                {
                                    icon: MapPin,
                                    title: "UK Office",
                                    subtitle: "Head Office",
                                    value: "3 Stanley Hall, 129-145 Botchergate, Carlisle CA1 1RZ",
                                    href: undefined,
                                    color: "bg-emerald-50 text-emerald-600",
                                    iconBg: "bg-emerald-100",
                                },
                                {
                                    icon: Clock,
                                    title: "Response Time",
                                    subtitle: "We aim to respond within",
                                    value: "24 hours",
                                    href: undefined,
                                    color: "bg-amber-50 text-amber-600",
                                    iconBg: "bg-amber-100",
                                },
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className={`w-10 h-10 sm:w-11 sm:h-11 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <card.icon className={`w-5 h-5 ${card.color.split(" ")[1]}`} />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-sm sm:text-base font-bold text-slate-900">{card.title}</h3>
                                            <p className="text-xs sm:text-sm text-slate-500 mb-1">{card.subtitle}</p>
                                            {card.href ? (
                                                <a
                                                    href={card.href}
                                                    className="text-sm sm:text-base font-bold text-secondary hover:underline break-all"
                                                >
                                                    {card.value}
                                                </a>
                                            ) : (
                                                <span className="text-sm sm:text-base font-bold text-slate-900">
                                                    {card.value}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Quick links */}
                            <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100">
                                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3">Explore Our Work</h4>
                                <div className="space-y-2">
                                    <Link
                                        href="/bim-services"
                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-secondary transition-colors group"
                                    >
                                        <Layers className="w-4 h-4 text-secondary" />
                                        <span className="group-hover:translate-x-0.5 transition-transform">BIM Services</span>
                                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link
                                        href="/solar-services"
                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors group"
                                    >
                                        <Zap className="w-4 h-4 text-amber-500" />
                                        <span className="group-hover:translate-x-0.5 transition-transform">Solar Engineering</span>
                                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                    <Link
                                        href="/compliance"
                                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors group"
                                    >
                                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        <span className="group-hover:translate-x-0.5 transition-transform">Compliance Standards</span>
                                        <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Form ── */}
                        <div className="lg:col-span-2 order-1 lg:order-2">
                            <motion.div
                                variants={scaleIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 shadow-lg overflow-hidden"
                            >
                                {/* Tab Switcher */}
                                <div className="px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-8">
                                    <div className="bg-slate-50 p-1 rounded-xl inline-flex w-full sm:w-auto">
                                        <button
                                            onClick={() => setActiveTab("quote")}
                                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${activeTab === "quote"
                                                    ? "bg-secondary text-white shadow-md shadow-secondary/20"
                                                    : "text-slate-500 hover:text-slate-700"
                                                }`}
                                        >
                                            Get a Quote
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("partner")}
                                            className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold transition-all ${activeTab === "partner"
                                                    ? "bg-secondary text-white shadow-md shadow-secondary/20"
                                                    : "text-slate-500 hover:text-slate-700"
                                                }`}
                                        >
                                            Partner With Us
                                        </button>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-5 sm:mb-6">
                                        {activeTab === "quote"
                                            ? "Request a Proposal"
                                            : "Outsourcing Partnership Inquiry"}
                                    </h2>

                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div>
                                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-white"
                                                    required
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                                    Company Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-white"
                                                    required
                                                    placeholder="Solar Co. / Architecture Firm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                            <div>
                                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-white"
                                                    required
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-white"
                                                    placeholder="+1 (555) 000-0000"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                                Service Interest
                                            </label>
                                            <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-white appearance-none">
                                                {serviceOptions.map((opt) => (
                                                    <option key={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                                                Project Details
                                            </label>
                                            <textarea
                                                rows={4}
                                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none transition-all bg-white resize-y"
                                                placeholder="Describe your project, timeline, and specific requirements..."
                                            />
                                        </div>

                                        {/* File upload */}
                                        <div className="border-2 border-dashed border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center hover:bg-slate-50 hover:border-secondary/30 transition-all cursor-pointer">
                                            <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 mx-auto mb-2" />
                                            <p className="text-xs sm:text-sm text-slate-500">
                                                Drag & drop files here, or click to browse
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                                                PDF, DWG, RVT — Max 50MB
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-accent mt-1.5 font-medium">
                                                Secure Link (Dropbox/Drive) preferred for large files.
                                            </p>
                                        </div>

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 sm:py-3.5 rounded-lg sm:rounded-xl transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 flex items-center justify-center gap-2 text-sm sm:text-base hover:-translate-y-0.5"
                                        >
                                            <span>
                                                {activeTab === "quote"
                                                    ? "Submit Request"
                                                    : "Inquire About Partnership"}
                                            </span>
                                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
