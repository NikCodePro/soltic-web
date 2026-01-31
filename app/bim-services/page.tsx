import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";
import { Layers } from "lucide-react";

export default function BimServices() {
  const bimServices = services.filter((s) => s.category === "BIM");

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex p-4 rounded-full bg-blue-900/20 mb-6">
            <Layers className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">BIM Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Integrated Building Information Modeling solutions from concept to construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bimServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
