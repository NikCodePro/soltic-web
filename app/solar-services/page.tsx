import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";
import { Zap } from "lucide-react";

export default function SolarServices() {
    const solarServices = services.filter((s) => s.category === "Solar");

    return (
        <div className="min-h-screen pt-24 px-4 pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex p-4 rounded-full bg-amber-900/20 mb-6">
                        <Zap className="w-10 h-10 text-amber-500" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Solar Engineering</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive PV design and analysis ensuring NEC compliance and optimal yield.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solarServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
