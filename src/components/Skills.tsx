"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Power Platform",
        items: ["Power Apps (Canvas/Model)", "Power Automate Flows", "SharePoint Lists", "Dataverse", "Logic Apps"],
        color: "border-emerald-500/30",
        bg: "bg-emerald-500/5",
    },
    {
        category: "IT & Support",
        items: ["Hardware Troubleshooting", "Windows OS Support", "Inventory Management", "System Diagnostics", "Active Directory"],
        color: "border-blue-500/30",
        bg: "bg-blue-500/5",
    },
    {
        category: "Tools & Languages",
        items: ["Excel (Advanced)", "Python (Basic)", "HTML/CSS", "C", "SQL"],
        color: "border-cyan-500/30",
        bg: "bg-cyan-500/5",
    },
    {
        category: "Core Competencies",
        items: ["Process Automation", "System Design", "Requirement Analysis", "Documentation", "User Training"],
        color: "border-purple-500/30",
        bg: "bg-purple-500/5",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-neutral-400 max-w-2xl">
                        My toolkit is built for delivery. I use the right tool for the job, whether it's low-code for speed or full-stack for control.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl border ${skill.color} ${skill.bg} backdrop-blur-sm relative group`}
                        >
                            <h3 className="text-lg font-semibold text-white mb-4 pb-3 border-b border-white/10">
                                {skill.category}
                            </h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
