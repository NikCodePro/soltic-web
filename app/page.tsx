"use client";

import Link from "next/link";
import { ArrowRight, Globe, Zap, Cpu, Layers } from "lucide-react";
import { services } from "@/app/lib/services";
import ServiceCard from "@/app/components/ServiceCard";
import { motion } from "framer-motion";

export default function Home() {
  const bimServices = services.filter(s => s.category === 'BIM');
  const solarServices = services.filter(s => s.category === 'Solar');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Animated Background Elements - adapted for light theme */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-80"></div>
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px]"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]"
          ></motion.div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
            <span className="text-blue-800 text-sm font-bold tracking-wide uppercase">Engineering Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-8 text-slate-900"
          >
            Precision Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Boundaries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Advanced BIM Modeling & Solar Engineering solutions designed for the modern construction landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="/services"
              className="group bg-secondary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center hover:-translate-y-1"
            >
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-lg text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive engineering services tailored for US & UK markets.
            </p>
          </motion.div>

          {/* BIM Category */}
          <div className="mb-24">
            <div className="flex items-center mb-10">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">BIM Services</h3>
                <p className="text-slate-500">Architectural, Structural & MEP Coordination</p>
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
              <div className="p-3 bg-amber-100 rounded-xl mr-4">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">Solar Engineering</h3>
                <p className="text-slate-500">PV Design, Analysis & Storage Solutions</p>
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 opacity-50 z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Globe, val: "2+", label: "Major Markets (US & UK)", color: "text-secondary", bg: "bg-blue-50" },
              { icon: Cpu, val: "24h", label: "Proposal Turnaround", color: "text-accent", bg: "bg-cyan-50" },
              { icon: Zap, val: "100%", label: "NEC / IBC Compliance", color: "text-success", bg: "bg-emerald-50" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-2xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className={`w-16 h-16 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold text-slate-900 mb-2">{stat.val}</div>
                <p className="text-slate-500 uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-secondary/10"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking firms leveraging our precision engineering for faster, safer, and more profitable projects.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-slate-900 font-bold py-5 px-12 rounded-full text-lg shadow-lg hover:shadow-white/20 hover:scale-105 transition-all"
          >
            Get Started Today
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
