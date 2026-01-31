import { Shield, BookOpen, UserCheck, Flag } from "lucide-react";

export default function Compliance() {
    return (
        <div className="bg-white">
            <div className="bg-slate-100 py-16 px-4 border-b border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h1 className="text-4xl font-bold font-heading text-primary mb-4">Compliance & Quality Assurance</h1>
                    <p className="text-lg text-gray-600">
                        We understand that in engineering, accuracy isn't optional—it's mandatory. Our workflows are designed to meet rigorous international standards.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* USA Standards */}
                    <div className="bg-white border-l-4 border-secondary pl-8 py-4 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <Flag className="w-8 h-8 text-secondary" />
                            <h2 className="text-2xl font-bold text-primary">USA Standards</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">NEC 2020 / 2023</span>
                                <span className="text-sm text-gray-500">National Electrical Code compliance for all PV designs.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">ASCE 7-16 / 7-22</span>
                                <span className="text-sm text-gray-500">Minimum Design Loads and Associated Criteria for Buildings.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">IBC / IRC</span>
                                <span className="text-sm text-gray-500">International Building & Residential Codes.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">IFC</span>
                                <span className="text-sm text-gray-500">International Fire Code (Access pathways & setback rules).</span>
                            </li>
                        </ul>
                    </div>

                    {/* UK Standards */}
                    <div className="bg-white border-l-4 border-accent pl-8 py-4 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <Flag className="w-8 h-8 text-accent" />
                            <h2 className="text-2xl font-bold text-primary">UK Standards</h2>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">BS 7671 (18th Edition)</span>
                                <span className="text-sm text-gray-500">Requirements for Electrical Installations (IET Wiring Regulations).</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">G98 / G99</span>
                                <span className="text-sm text-gray-500">Grid connection standards for distributed generation.</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">Part L</span>
                                <span className="text-sm text-gray-500">Conservation of fuel and power (Building Regulations).</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-bold text-gray-800">PAS 1192 / ISO 19650</span>
                                <span className="text-sm text-gray-500">BIM information management standards.</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* QA Process */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-primary mb-16">Our 3-Tier Quality Check Process</h2>
                    <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg w-full md:w-1/3 text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-gray-600">1</div>
                            <UserCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Senior Drafter</h3>
                            <p className="text-sm text-gray-600">Initial modeling and drafting based on client inputs and checklists.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-xl border-t-4 border-secondary shadow-lg w-full md:w-1/3 text-center transform md:scale-110">
                            <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                            <BookOpen className="w-10 h-10 text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">Design Engineer</h3>
                            <p className="text-sm text-gray-600">Technical review for code compliance, load calculations, and system efficiency.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg w-full md:w-1/3 text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl text-gray-600">3</div>
                            <Shield className="w-10 h-10 text-accent mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">QC Manager</h3>
                            <p className="text-sm text-gray-600">Final aesthetic and standards check before client delivery.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
