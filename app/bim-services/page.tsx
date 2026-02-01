"use client";

import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function BimServices() {
  const bimServices = services.filter((s) => s.category === "BIM");

  return (
    <div className="min-h-screen pt-24 px-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-4 rounded-full bg-blue-50 mb-6">
            <Layers className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">BIM Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Integrated Building Information Modeling solutions from concept to construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bimServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
