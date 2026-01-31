"use client";

import Link from "next/link";
import { ArrowRight, Building, Cuboid, Zap, ShieldCheck, FileText, Sun, Grid, BarChart, BatteryCharging, Battery } from "lucide-react";
import { Service } from "@/app/lib/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building,
    Cuboid,
    Zap,
    ShieldCheck,
    FileText,
    Sun,
    Grid,
    BarChart,
    BatteryCharging,
    Battery
};

export default function ServiceCard({ service }: { service: Service }) {
    const Icon = iconMap[service.iconName] || Zap;

    return (
        <Link href={`/services/${service.slug}`} className="group relative block h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none" />

            <div className="h-full glass-panel p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                <div className="mb-6 flex items-start justify-between">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border border-white/10 ${service.category === 'BIM' ? 'text-blue-200 bg-blue-900/30' : 'text-amber-200 bg-amber-900/30'}`}>
                        {service.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {service.shortDescription}
                </p>

                <div className="flex items-center text-secondary font-semibold text-sm group-hover:text-white transition-colors">
                    View Details <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
