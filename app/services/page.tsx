"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, PenTool, CheckCircle } from "lucide-react";

export default function ServicesPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-services.png"
                        alt="Futuristic Engineering Services"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light">
                            We deliver precision-driven BIM modeling and Solar Engineering solutions that define the future of construction.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Services Navigation */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    >
                        {/* BIM Service Card */}
                        <motion.div
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-200 bg-white border border-slate-100 hover:border-secondary/30 transition-all hover:shadow-secondary/20"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layers className="w-64 h-64 text-secondary" />
                            </div>

                            <div className="p-12 relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <Layers className="w-8 h-8 text-secondary group-hover:text-white" />
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors">BIM Services</h3>
                                <p className="text-slate-600 mb-8 text-lg flex-grow">
                                    Comprehensive Building Information Modeling services including architectural, structural, and MEP coordination. We turn complex designs into buildable reality.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {['3D Modeling & Coordination', 'Clash Detection', 'Shop Drawings', 'Scan to BIM'].map((item) => (
                                        <li key={item} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-success mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/bim-services"
                                    className="inline-flex items-center text-lg font-bold text-secondary group-hover:translate-x-2 transition-transform"
                                >
                                    Explore BIM Solutions <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Solar Service Card */}
                        <motion.div
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-200 bg-white border border-slate-100 hover:border-vibrant/30 transition-all hover:shadow-vibrant/20"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap className="w-64 h-64 text-vibrant" />
                            </div>

                            <div className="p-12 relative z-10 flex flex-col h-full">
                                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vibrant group-hover:text-white transition-colors duration-300">
                                    <Zap className="w-8 h-8 text-vibrant group-hover:text-white" />
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-vibrant transition-colors">Solar Engineering</h3>
                                <p className="text-slate-600 mb-8 text-lg flex-grow">
                                    End-to-end solar PV design and engineering services. From residential rooftops to commercial utility-scale projects, we ensure maximum efficiency and compliance.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {['PV System Design', 'Performance Analysis', 'Permit Packages', 'Battery Storage Solutions'].map((item) => (
                                        <li key={item} className="flex items-center text-slate-700">
                                            <CheckCircle className="w-5 h-5 text-success mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/solar-services"
                                    className="inline-flex items-center text-lg font-bold text-vibrant group-hover:translate-x-2 transition-transform"
                                >
                                    Explore Solar Solutions <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Workflow</h2>
                        <p className="text-xl text-slate-600">Simplicity in execution, complexity in design.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'Understanding your project goals & requirements.' },
                            { step: '02', title: 'Analysis', desc: 'Detailed feasibility study and technical assessment.' },
                            { step: '03', title: 'Design', desc: 'Precision modeling and engineering using advanced tools.' },
                            { step: '04', title: 'Delivery', desc: 'Compliance-ready documentation and support.' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <span className="text-5xl font-black text-slate-100 absolute top-4 right-4 z-0">{item.step}</span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/50 mix-blend-multiply"></div>
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a custom engineering solution?</h2>
                    <p className="text-xl text-blue-100 mb-8">We tackle the most challenging projects with innovative thinking.</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-secondary font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Talk to an Engineer
                    </Link>
                </div>
            </section>
        </div>
    );
}
