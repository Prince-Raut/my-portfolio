"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Box, FileKey, Layers } from "lucide-react";

const projects = [
    {
        title: "Inventory Management System",
        category: "PowerApps • Dataverse",
        description: "Designed and deployed a production PowerApps solution for tracking assets, stock levels, and movement history. Replaced manual spreadsheets with a real-time system.",
        icon: <Box className="w-6 h-6 text-cyan-400" />,
        stats: "Real-time Tracking",
        color: "group-hover:border-cyan-500/50",
    },
    {
        title: "Operations & Approval Workflow",
        category: "Power Automate • SharePoint",
        description: "Built workflow-based apps to manage daily operations, multi-stage approvals, and automated reporting. Reduced turnaround time for internal requests.",
        icon: <Layers className="w-6 h-6 text-emerald-400" />,
        stats: "Automated Approvals",
        color: "group-hover:border-emerald-500/50",
    },
    {
        title: "Cloud File Access Control",
        category: "SharePoint • Security",
        description: "Implemented role-based access and permission management for cloud-hosted files. Ensured secure data handling and compliance with organizational policies.",
        icon: <FileKey className="w-6 h-6 text-purple-400" />,
        stats: "RBAC Security",
        color: "group-hover:border-purple-500/50",
    },
];

export default function Projects() {
    return (
        <section className="py-24 bg-neutral-900/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                        Production Deployments
                    </h2>
                    <p className="text-neutral-400 max-w-2xl">
                        Real systems used by real teams. Not just academic theories.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative p-8 rounded-2xl bg-neutral-900 border border-white/5 transition-all duration-300 hover:-translate-y-1 ${project.color}`}
                        >
                            <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit border border-white/10">
                                {project.icon}
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-xs font-mono text-neutral-500 mb-2 block">{project.category}</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-neutral-400 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    {project.stats}
                                </span>
                                {/* Placeholder for link if available, or just visual indicator */}
                                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
