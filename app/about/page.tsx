"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, ShieldCheck, Globe } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/team-office.png"
                        alt="Soltic Engineering Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        We Are Soltic
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-xl md:text-2xl font-light text-slate-200 max-w-2xl mx-auto"
                    >
                        A team of passionate engineers committed to sustainability and precision.
                    </motion.p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">Our Mission</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-6">Empowering Construction with Digital Intelligence</h3>
                        <p className="text-slate-700 text-lg leading-relaxed mb-6">
                            At Soltic, we believe that the future of construction lies in the seamless integration of technology and engineering. We were founded on the principle that precision in the digital world leads to perfection in the physical one.
                        </p>
                        <p className="text-slate-700 text-lg leading-relaxed">
                            By combining cutting-edge BIM methodologies with advanced Solar Engineering, we help our clients build faster, safer, and greener. We are not just service providers; we are your technical partners in success.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { icon: Target, label: "Precision", text: "Zero-tolerance for errors in our modeling." },
                            { icon: Globe, label: "Global Reach", text: "Serving clients across US, UK & Europe." },
                            { icon: ShieldCheck, label: "Compliance", text: "Strict adherence to NEC & IBC codes." },
                            { icon: Users, label: "Collaboration", text: "Seamless integration with your team." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 dark:border-none shadow-sm hover:shadow-md transition-shadow"
                            >
                                <item.icon className="w-10 h-10 text-accent mb-4" />
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.label}</h4>
                                <p className="text-sm text-slate-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/grid-pattern.svg')]"></div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                    {[
                        { value: "2+", label: "Years Experience" },
                        { value: "50+", label: "Projects Delivered" },
                        { value: "100%", label: "Client Satisfaction" },
                        { value: "24h", label: "Support Coverage" }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">{stat.value}</span>
                            <span className="text-slate-400 uppercase tracking-wider text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Join Our Growing Network</h2>
                    <p className="text-xl text-slate-600 mb-10">
                        Whether you are an EPC, an Architect, or a Developer, we have the engineering muscle to support your vision.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
