"use client";

import { Shield, BookOpen, UserCheck, Flag, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Compliance() {
    return (
        <div className="min-h-screen pt-24 px-4 pb-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex p-4 rounded-full bg-emerald-50 mb-6 border border-emerald-100">
                        <Shield className="w-10 h-10 text-success" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Compliance & Quality</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        In engineering, accuracy isn't optional—it's mandatory. Our workflows meets rigorous international standards.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* USA Standards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl relative overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Flag className="w-32 h-32 text-slate-900" />
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <Flag className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">USA Standards</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">NEC 2020 / 2023</span>
                                    <span className="text-slate-600">National Electrical Code compliance for all PV designs.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">ASCE 7-16 / 7-22</span>
                                    <span className="text-slate-600">Minimum Design Loads and Associated Criteria for Buildings.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">IBC / IRC</span>
                                    <span className="text-slate-600">International Building & Residential Codes.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">IFC</span>
                                    <span className="text-slate-600">International Fire Code (Access pathways & setback rules).</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* UK Standards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl relative overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Flag className="w-32 h-32 text-slate-900" />
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-cyan-50 rounded-lg">
                                <Flag className="w-8 h-8 text-accent" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">UK Standards</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">BS 7671 (18th Edition)</span>
                                    <span className="text-slate-600">Requirements for Electrical Installations (IET Wiring Regulations).</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">G98 / G99</span>
                                    <span className="text-slate-600">Grid connection standards for distributed generation.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">Part L</span>
                                    <span className="text-slate-600">Conservation of fuel and power (Building Regulations).</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-slate-900 text-lg">PAS 1192 / ISO 19650</span>
                                    <span className="text-slate-600">BIM information management standards.</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* QA Process */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-3xl blur-3xl"></div>
                    <div className="relative bg-white p-12 rounded-3xl border border-slate-100 shadow-xl">
                        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">3-Tier Quality Assurance</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:border-secondary/50 transition-colors text-center group">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/10 transition-colors">
                                    <UserCheck className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Senior Drafter</h3>
                                <p className="text-sm text-slate-500">Initial modeling and drafting based on client inputs and checklists.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 bg-white p-8 rounded-2xl border border-secondary/30 shadow-lg text-center transform scale-105">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BookOpen className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Design Engineer</h3>
                                <p className="text-sm text-slate-500">Technical review for code compliance, load calculations, and system efficiency.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-md hover:border-accent/50 transition-colors text-center group">
                                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                                    <Shield className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">QC Manager</h3>
                                <p className="text-sm text-slate-500">Final aesthetic and standards check before client delivery.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
