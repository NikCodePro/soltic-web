"use client";

import { useState } from "react";
import { Mail, Phone, Upload, Send } from "lucide-react";

export default function Contact() {
    const [activeTab, setActiveTab] = useState<'quote' | 'partner'>('quote');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you! This is a demo form. In production, this would send an email.");
    };

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-heading text-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600">
                        Ready to start a project? Tell us about your needs.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
                        <button
                            onClick={() => setActiveTab('quote')}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'quote'
                                ? 'bg-secondary text-white shadow-md'
                                : 'text-gray-500 hover:text-primary'
                                }`}
                        >
                            Get a Quote
                        </button>
                        <button
                            onClick={() => setActiveTab('partner')}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'partner'
                                ? 'bg-secondary text-white shadow-md'
                                : 'text-gray-500 hover:text-primary'
                                }`}
                        >
                            Partner With Us
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">
                            {activeTab === 'quote' ? 'Request a Proposal' : 'Outsourcing Partnership'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" required placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" required placeholder="Solar Co. / Architecture Firm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" required placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                                    <option>Solar PV Permit Package</option>
                                    <option>Solar Sales Proposal</option>
                                    <option>Architectural BIM (LOD 300+)</option>
                                    <option>MEP Coordination</option>
                                    <option>Structural Modeling</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Describe your project, timeline, and specific requirements..."></textarea>
                            </div>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-500">
                                    Drag & drop files here, or click to browse <br />
                                    <span className="text-xs text-gray-400">(PDF, DWG, RVT - Max 50MB)</span>
                                </p>
                                <p className="text-xs text-accent mt-2 font-medium">Secure Link (Dropbox/Drive) preferred for large files.</p>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-slate-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center space-x-2">
                                <span>{activeTab === 'quote' ? 'Submit Request' : 'Inquire About Partnership'}</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Direct Contact Info */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email Us</h3>
                            <p className="text-gray-600 mb-1">For general inquiries and project submission:</p>
                            <a href="mailto:projects@soltic.com" className="text-primary font-bold hover:underline">projects@soltic.com</a>
                        </div>
                    </div>



                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Call Us</h3>
                            <p className="text-gray-600 mb-1">Mon-Fri, 9am - 6pm GMT</p>
                            <a href="tel:+447436900601" className="text-primary font-bold hover:underline">+44 7436 900601</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 bg-white rounded-xl shadow-sm md:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Visit Us</h3>
                            <p className="text-gray-600 mb-1">UK Office</p>
                            <span className="text-primary font-bold">3 Stanley Hall, 129-145 Botchergate,<br />Carlisle CA1 1RZ</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
