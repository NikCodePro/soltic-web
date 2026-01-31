import Link from "next/link";
import { ArrowRight, CheckCircle, Zap, Box, Clock, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-slate-800 opacity-90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Precision Engineering for the <span className="text-secondary">US & UK</span> Construction Sectors.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light">
              Specialized BIM Modeling & Solar PV Design Services. Delivered compliant, on time, and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bim-services"
                className="bg-accent hover:bg-teal-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg text-center"
              >
                Explore BIM Services
              </Link>
              <Link
                href="/solar-services"
                className="bg-secondary hover:bg-amber-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg text-center"
              >
                Explore Solar Engineering
              </Link>
            </div>
          </div>

          {/* Hero Visual - Split Cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform translate-y-8">
              <Box className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">BIM Modeling</h3>
              <p className="text-sm text-gray-200">LOD 300/400 Architectural & Structural models.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform -translate-y-4">
              <Zap className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Solar PV Design</h3>
              <p className="text-sm text-gray-200">NEC Compliant permit packages & layouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Software Logos */}
      <section className="bg-gray-100 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 font-semibold mb-6 uppercase tracking-widest text-sm">Trusted Software Expertise</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders nicely styled instead of images for now to avoid broken links, or could use simple SVGs */}
            <span className="text-xl font-bold text-slate-600">Autodesk Revit</span>
            <span className="text-xl font-bold text-slate-600">AutoCAD</span>
            <span className="text-xl font-bold text-slate-600">Navisworks</span>
            <span className="text-xl font-bold text-slate-600">Helioscope</span>
            <span className="text-xl font-bold text-slate-600">Aurora Solar</span>
            <span className="text-xl font-bold text-slate-600">PVsyst</span>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Why Choose Soltic?</h2>
            <p className="text-lg text-gray-600">
              We bridge the gap between technical complexity and project deadlines. Our engineered solutions are built for global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <ShieldCheck className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Global Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Strict adherence to NEC 2020/2023, IBC, ASCE 7-16 for US projects and BS 7671 for UK compliance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Clock className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Rapid Turnaround</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand deadlines. Get preliminary Solar Proposals within 24 hours and BIM coordination updates daily.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <CheckCircle className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">ISO-Grade Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Our 3-tier quality check process (Drafter → Engineer → QC Manager) ensures error-free deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Streamline Your Engineering Workflow?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Whether you need overflow support or a dedicated design team, Soltic is ready to partner with you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-secondary hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-2xl transition-transform hover:scale-105"
          >
            Start a Pilot Project
          </Link>
        </div>
      </section>
    </div>
  );
}
