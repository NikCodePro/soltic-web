"use client";

import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function SolarServices() {
    const solarServices = services.filter((s) => s.category === "Solar");

    return (
        <div className="min-h-screen pt-24 px-4 pb-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex p-4 rounded-full bg-amber-50 mb-6">
                        <Zap className="w-10 h-10 text-vibrant" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Solar Engineering</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Comprehensive PV design and analysis ensuring NEC compliance and optimal yield.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solarServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
