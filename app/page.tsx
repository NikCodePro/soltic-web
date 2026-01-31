import Link from "next/link";
import { ArrowRight, Globe, Zap, Cpu, Layers } from "lucide-react";
import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";

export default function Home() {
  const bimServices = services.filter(s => s.category === 'BIM');
  const solarServices = services.filter(s => s.category === 'Solar');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-background to-background opacity-60"></div>
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel mb-8 animate-fade-in-up border border-secondary/30">
            <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse"></span>
            <span className="text-secondary text-sm font-bold tracking-wide uppercase">Engineering Intelligence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Precision Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Boundaries</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Advanced BIM Modeling & Solar Engineering solutions designed for the modern construction landscape.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/#services"
              className="group bg-secondary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.7)] flex items-center justify-center"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-lg text-white glass-panel hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive engineering services tailored for US & UK markets.
            </p>
          </div>

          {/* BIM Category */}
          <div className="mb-24">
            <div className="flex items-center mb-10">
              <div className="p-3 bg-blue-900/30 rounded-xl border border-blue-500/30 mr-4">
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">BIM Services</h3>
                <p className="text-gray-400">Architectural, Structural & MEP Coordination</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bimServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Solar Category */}
          <div>
            <div className="flex items-center mb-10">
              <div className="p-3 bg-amber-900/30 rounded-xl border border-amber-500/30 mr-4">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Solar Engineering</h3>
                <p className="text-gray-400">PV Design, Analysis & Storage Solutions</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solarServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Globe Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Globe className="w-12 h-12 text-secondary mx-auto mb-6" />
              <div className="text-5xl font-bold text-white mb-2">2+</div>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Major Markets (US & UK)</p>
            </div>
            <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Cpu className="w-12 h-12 text-accent mx-auto mb-6" />
              <div className="text-5xl font-bold text-white mb-2">24h</div>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Proposal Turnaround</p>
            </div>
            <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Zap className="w-12 h-12 text-success mx-auto mb-6" />
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400 uppercase tracking-widest text-sm">NEC / IBC Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking firms leveraging our precision engineering for faster, safer, and more profitable projects.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-bold py-5 px-12 rounded-full text-lg shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.7)] hover:scale-105 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
