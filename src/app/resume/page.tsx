"use client";

import { Mail, MapPin, Phone, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-neutral-200 p-6 md:p-12 font-sans selection:bg-cyan-500/30">

            {/* Navigation */}
            <nav className="max-w-4xl mx-auto mb-12 flex justify-between items-center print:hidden">
                <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors text-sm font-medium"
                >
                    <Download className="w-4 h-4" />
                    Print / Save PDF
                </button>
            </nav>

            {/* Resume Container */}
            <article className="max-w-4xl mx-auto bg-neutral-900/30 p-8 md:p-16 rounded-2xl border border-white/5 shadow-2xl print:bg-white print:text-black print:border-none print:shadow-none print:p-0">

                {/* Header */}
                <header className="border-b border-white/10 print:border-black/10 pb-8 mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white print:text-black mb-4">Prince Raut Kurmi</h1>
                    <p className="text-xl text-cyan-400 print:text-cyan-700 font-medium mb-6">Power Platform Developer | IT Support | Operations Assistant</p>

                    <div className="flex flex-wrap gap-4 md:gap-8 text-sm text-neutral-400 print:text-neutral-600 font-mono">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Godawari, Lalitpur
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" /> +977 9803826776
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> princeraut9327@gmail.com
                        </div>
                    </div>
                </header>

                {/* Two Column Layout for Profile & Skills */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Main Column */}
                    <div className="md:col-span-2 space-y-8">

                        <section>
                            <h2 className="text-lg font-bold text-white print:text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                Profile
                            </h2>
                            <p className="text-neutral-300 print:text-neutral-700 leading-relaxed">
                                Power Platform Developer with 3+ years of hands-on experience building production-ready PowerApps and Power Automate solutions across hospitality and service industries. Strong in inventory systems, operations workflows, and IT support. Known for building practical systems that teams actually use.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white print:text-black uppercase tracking-wider mb-6 flex items-center gap-2">
                                Work Experience
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-bold text-white print:text-black text-lg">Power Platform Developer</h3>
                                        <span className="font-mono text-sm text-neutral-500">(2 Years)</span>
                                    </div>
                                    <p className="text-cyan-400 print:text-cyan-700 text-sm mb-2">Godawari Village Resort (GVR)</p>
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-neutral-300 print:text-neutral-700 marker:text-cyan-500">
                                        <li>Built and deployed PowerApps for operations, inventory, and approvals</li>
                                        <li>Automated workflows using Power Automate (notifications, follow-ups)</li>
                                        <li>Managed data using SharePoint Lists & Libraries</li>
                                        <li>Delivered stable apps used daily by staff and management</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-bold text-white print:text-black text-lg">PowerApps & Inventory Management Assistant</h3>
                                        <span className="font-mono text-sm text-neutral-500">(1 Year)</span>
                                    </div>
                                    <p className="text-cyan-400 print:text-cyan-700 text-sm mb-2">Sterlingwells Services Pvt. Ltd.</p>
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-neutral-300 print:text-neutral-700 marker:text-cyan-500">
                                        <li>Developed PowerApps for inventory tracking and asset management</li>
                                        <li>Maintained stock movement records and reporting systems</li>
                                        <li>Supported automation of inventory workflows</li>
                                        <li>Assisted teams with system usage and data accuracy</li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-bold text-white print:text-black text-lg">Operations Management Assistant</h3>
                                        <span className="font-mono text-sm text-neutral-500">(1 Year)</span>
                                    </div>
                                    <p className="text-cyan-400 print:text-cyan-700 text-sm mb-2">Sterlingwells Services Pvt. Ltd.</p>
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-neutral-300 print:text-neutral-700 marker:text-cyan-500">
                                        <li>Supported daily operations, reporting, and documentation</li>
                                        <li>Improved internal tracking and coordination</li>
                                        <li>Provided IT and system support</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white print:text-black uppercase tracking-wider mb-6 flex items-center gap-2">
                                Education
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-white print:text-black">Bachelors in Information Technology Management (BITM)</h3>
                                    <div className="flex justify-between text-neutral-400 print:text-neutral-600">
                                        <span>St. Xavier’s College</span>
                                        <span className="font-mono text-sm">2021 – Expected 2026</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-white print:text-black">Higher Secondary Education (Management with Computer Science)</h3>
                                    <div className="flex justify-between text-neutral-400 print:text-neutral-600">
                                        <span>St. Xavier’s School</span>
                                        <span className="font-mono text-sm">2019 – 2021</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div className="space-y-8">

                        <section>
                            <h2 className="text-lg font-bold text-white print:text-black uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                Skills
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-white print:text-black mb-2">Core Tech</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 leading-relaxed">
                                        PowerApps, Power Automate, SharePoint, Dataverse
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white print:text-black mb-2">Systems</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 leading-relaxed">
                                        Inventory Systems, Process Automation, Windows Support
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white print:text-black mb-2">Tools & Languages</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 leading-relaxed">
                                        Excel, Python (Basic), HTML, CSS, JavaScript, MySQL
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold text-white print:text-black uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                Certifications
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-white print:text-black text-sm">PowerApps Developer</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 mb-1">GVR</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white print:text-black text-sm">PowerApps & Inventory Management</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 mb-1">Sterlingwells</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white print:text-black text-sm">Operations Assistant</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 mb-1">Sterlingwells</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white print:text-black text-sm">Hackathon Participant</h3>
                                    <p className="text-xs text-neutral-400 print:text-neutral-600 mb-1">St. Xavier’s College</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </article >
        </main >
    );
}
