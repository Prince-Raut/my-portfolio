"use client";

import { motion } from "framer-motion";

const experience = [
    {
        role: "Power Platform Developer",
        company: "Godawari Village Resort (GVR)",
        duration: "2 Years",
        description: [
            "Built and deployed PowerApps for operations, inventory, and approvals.",
            "Automated workflows using Power Automate (notifications, follow-ups).",
            "Managed data using SharePoint Lists & Libraries.",
            "Delivered stable apps used daily by staff and management.",
        ],
    },
    {
        role: "PowerApps & Inventory Management Assistant",
        company: "Sterlingwells Services Pvt. Ltd.",
        duration: "1 Year",
        description: [
            "Developed PowerApps for inventory tracking and asset management.",
            "Maintained stock movement records and reporting systems.",
            "Supported automation of inventory workflows.",
            "Assisted teams with system usage and data accuracy.",
        ],
    },
    {
        role: "Operations Management Assistant",
        company: "Sterlingwells Services Pvt. Ltd.",
        duration: "1 Year",
        description: [
            "Supported daily operations, reporting, and documentation.",
            "Improved internal tracking and coordination.",
            "Provided IT and system support.",
        ],
    },
];

export default function Experience() {
    return (
        <section className="py-24 relative">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-16 flex items-center gap-3"
                >
                    <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                    Professional Timeline
                </motion.h2>

                <div className="relative space-y-12">
                    {/* Continuous Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-[200px] top-2 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    {experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative md:grid md:grid-cols-[200px_1fr] md:gap-12"
                        >

                            {/* Desktop Timeline Dot */}
                            <div className="hidden md:block absolute left-[200px] top-1.5 w-4 h-4 rounded-full bg-neutral-700 border-4 border-[#0a0a0a] -translate-x-1/2 z-10" />

                            {/* Mobile Timeline Line & Dot */}
                            <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-white/10"></div>
                            <div className="md:hidden absolute left-0 top-1.5 w-4 h-4 rounded-full bg-neutral-700 border-4 border-[#0a0a0a] -translate-x-1/2 z-10"></div>

                            {/* Date Column */}
                            <div className="mb-2 md:mb-0 md:text-right md:pr-4 pl-6 md:pl-0">
                                <span className="text-sm font-mono text-neutral-500">{job.duration}</span>
                            </div>

                            {/* Content Column */}
                            <div className="pl-6 md:pl-0">
                                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                <p className="text-cyan-400 mb-4">{job.company}</p>
                                <ul className="space-y-2">
                                    {job.description.map((item, i) => (
                                        <li key={i} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-600 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
