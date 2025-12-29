"use client";

import { motion } from "framer-motion";
import { Server, Database, ShieldCheck, Workflow } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Server className="w-6 h-6 text-cyan-400" />,
            title: "System Architecture",
            desc: "Designing robust, scalable internal systems that handle real business logic.",
        },
        {
            icon: <Workflow className="w-6 h-6 text-emerald-400" />,
            title: "Workflow Automation",
            desc: "Turning manual, error-prone processes into efficient, automated pipelines.",
        },
        {
            icon: <Database className="w-6 h-6 text-purple-400" />,
            title: "Data Management",
            desc: "Structured data solutions that ensure integrity and accessibility.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
            title: "Reliability & Security",
            desc: "Building with production-grade security and uptime in mind.",
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-neutral-900/30">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-6 flex items-center gap-3"
                    >
                        <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4 text-neutral-300 leading-relaxed text-lg"
                    >
                        <p>
                            <strong className="text-white font-medium">Power Platform Developer with 3+ years of experience.</strong>
                        </p>
                        <p>
                            With a strong background in Information Management and hands-on experience in IT support, I specialize in building production-ready PowerApps and automating workflows. I prioritize
                            <span className="text-cyan-400"> practicality</span>,
                            <span className="text-emerald-400"> efficiency</span>, and
                            <span className="text-purple-400"> user adoption</span>.
                        </p>
                        <p>
                            Whether it's creating a custom inventory system for a hotel or streamlining operations with Power Automate, my goal is always the same: <strong>Build stable systems that save time and reduce errors.</strong>
                        </p>
                    </motion.div>
                </div>

                {/* Features Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-black/30 w-fit">
                                {f.icon}
                            </div>
                            <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                            <p className="text-sm text-neutral-400">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
