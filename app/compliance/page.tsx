import { Shield, BookOpen, UserCheck, Flag, CheckCircle2 } from "lucide-react";

export default function Compliance() {
    return (
        <div className="min-h-screen pt-24 px-4 pb-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex p-4 rounded-full bg-white/5 mb-6 border border-white/10">
                        <Shield className="w-10 h-10 text-success" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance & Quality</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        In engineering, accuracy isn't optional—it's mandatory. Our workflows meets rigorous international standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* USA Standards */}
                    <div className="glass-panel p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Flag className="w-32 h-32 text-white" />
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-secondary/20 rounded-lg">
                                <Flag className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">USA Standards</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">NEC 2020 / 2023</span>
                                    <span className="text-gray-400">National Electrical Code compliance for all PV designs.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">ASCE 7-16 / 7-22</span>
                                    <span className="text-gray-400">Minimum Design Loads and Associated Criteria for Buildings.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">IBC / IRC</span>
                                    <span className="text-gray-400">International Building & Residential Codes.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">IFC</span>
                                    <span className="text-gray-400">International Fire Code (Access pathways & setback rules).</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* UK Standards */}
                    <div className="glass-panel p-10 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Flag className="w-32 h-32 text-white" />
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-accent/20 rounded-lg">
                                <Flag className="w-8 h-8 text-accent" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">UK Standards</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">BS 7671 (18th Edition)</span>
                                    <span className="text-gray-400">Requirements for Electrical Installations (IET Wiring Regulations).</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">G98 / G99</span>
                                    <span className="text-gray-400">Grid connection standards for distributed generation.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">Part L</span>
                                    <span className="text-gray-400">Conservation of fuel and power (Building Regulations).</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <span className="block font-bold text-white text-lg">PAS 1192 / ISO 19650</span>
                                    <span className="text-gray-400">BIM information management standards.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* QA Process */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl blur-3xl"></div>
                    <div className="relative glass-panel p-12 rounded-3xl border border-white/10">
                        <h2 className="text-3xl font-bold text-center text-white mb-16">3-Tier Quality Assurance</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
                            {/* Connector Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 bg-[#0f172a] p-8 rounded-2xl border border-white/5 hover:border-secondary/50 transition-colors text-center group">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                                    <UserCheck className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Senior Drafter</h3>
                                <p className="text-sm text-gray-400">Initial modeling and drafting based on client inputs and checklists.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 bg-[#0f172a] p-8 rounded-2xl border border-secondary/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] text-center transform scale-105">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BookOpen className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Design Engineer</h3>
                                <p className="text-sm text-gray-400">Technical review for code compliance, load calculations, and system efficiency.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 bg-[#0f172a] p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors text-center group">
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                                    <Shield className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">QC Manager</h3>
                                <p className="text-sm text-gray-400">Final aesthetic and standards check before client delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
