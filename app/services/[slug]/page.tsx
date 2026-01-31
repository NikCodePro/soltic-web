import { services } from "@/app/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Content Side */}
                <div className="space-y-8 animate-fade-in-up">
                    <div>
                        <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">
                            {service.category} Service
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {service.fullDescription}
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl border-l-4 border-accent">
                        <h3 className="text-2xl font-bold text-white mb-6">Key Deliverables & Features</h3>
                        <ul className="space-y-4">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mr-4 mt-0.5" />
                                    <span className="text-gray-300 text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-8">
                        <Link
                            href="/contact"
                            className="inline-block bg-gradient-to-r from-secondary to-blue-600 hover:from-blue-600 hover:to-secondary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1"
                        >
                            Get a Quote for this Service
                        </Link>
                    </div>
                </div>

                {/* Visual Side (Sticky) */}
                <div className="relative hidden lg:block">
                    <div className="sticky top-32">
                        <div className="relative aspect-square rounded-3xl overflow-hidden glass-panel border border-white/10 group">
                            {/* Abstract Visual Placeholder - can be replaced with specific images later */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-black p-10 flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent animate-pulse"></div>
                                <div className="w-full h-full border border-white/5 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/10 text-9xl font-bold select-none">{service.title.charAt(0)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
