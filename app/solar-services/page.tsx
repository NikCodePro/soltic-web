import Link from "next/link";
import { Sun, Battery, FileCheck, Zap, BarChart3, Map } from "lucide-react";

export default function SolarServices() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-secondary">Solar Engineering Services</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        End-to-end PV design solutions for residential and commercial installers. We deliver NEC-compliant permit packages that get approved.
                    </p>
                </div>
            </div>

            {/* Main Service offerings */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group bg-white">
                        <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Sun className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Sales Proposals</h3>
                        <p className="text-gray-600 mb-4">
                            Win more customers with stunning, accurate solar proposals. We simulate production and ROI.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2 mb-6">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>3D Site Modeling</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Shading Analysis</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>Aurora/Helioscope Expert</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group bg-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Core Service</div>
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <FileCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Permit Packages</h3>
                        <p className="text-gray-600 mb-4">
                            Full plan sets ready for AHJ submission. We cover all electrical and structural details.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2 mb-6">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Site Plans & Roof Layouts</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Single Line Diagrams (SLD)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Equipment Data Sheets & Placards</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group bg-white">
                        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Battery className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3">Storage & EV</h3>
                        <p className="text-gray-600 mb-4">
                            Advanced designs for modern energy needs, including battery backup and EV charging infrastructure.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2 mb-6">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>ESS Integration (Tesla, Enphase)</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Load Calculations</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div>Interconnection Applications</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Engineering Analysis Section */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-primary mb-12">Advanced Engineering Capabilities</h2>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                            <BarChart3 className="w-10 h-10 text-secondary mb-4" />
                            <h4 className="text-xl font-bold mb-2">Energy Yield Reports (P50/P90)</h4>
                            <p className="text-gray-600 text-sm">Detailed probability analysis for commercial financing and investment decisions.</p>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                            <Zap className="w-10 h-10 text-yellow-500 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Voltage Drop Calculations</h4>
                            <p className="text-gray-600 text-sm">Ensuring system efficiency by optimizing wire sizing and long runs.</p>
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                            <Map className="w-10 h-10 text-blue-500 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Structural Assessment</h4>
                            <p className="text-gray-600 text-sm">Roof load capacity checks and attachment detail specification.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-16 text-center">
                <h2 className="text-2xl font-bold text-primary mb-6">Need a sample permit package?</h2>
                <Link href="/contact" className="text-accent font-bold hover:underline text-lg">
                    Contact us to request a sanitized PDF sample &rarr;
                </Link>
            </div>
        </div>
    );
}
