"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-heading font-bold text-2xl tracking-wider">
                            SOLTIC
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="hover:text-accent transition-colors font-semibold">
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center space-x-1 hover:text-accent transition-colors font-semibold focus:outline-none"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                <span>Services</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Content */}
                            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block">
                                <div className="py-1">
                                    <Link href="/bim-services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary border-b border-gray-100">
                                        BIM Services
                                    </Link>
                                    <Link href="/solar-services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">
                                        Solar Engineering
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/compliance" className="hover:text-accent transition-colors font-semibold">
                            Compliance
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-secondary hover:bg-amber-600 text-white px-5 py-2.5 rounded-md font-bold transition-all transform hover:scale-105 shadow-md"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-200 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/bim-services"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                        >
                            BIM Services
                        </Link>
                        <Link
                            href="/solar-services"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Solar Services
                        </Link>
                        <Link
                            href="/compliance"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Compliance
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 mt-4 text-center rounded-md text-base font-bold bg-secondary text-white mx-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
