import { Terminal, Cpu, ArrowRight, FileText, Instagram, Facebook, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* Navbar/Header Area - Positioned absolutely for flow */}
      <nav className="absolute top-0 w-full z-20 flex justify-end p-4 md:p-6">
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/contact" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-semibold text-neutral-400 hover:text-white transition-colors px-2 md:px-4 py-1.5 md:py-2 hover:bg-white/5 rounded-lg">
            Contact
          </Link>
          <Link href="/resume" className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-semibold text-neutral-400 hover:text-white transition-colors px-2 md:px-4 py-1.5 md:py-2 hover:bg-white/5 rounded-lg">
            <FileText className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">View Full CV</span>
            <span className="sm:hidden">CV</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 pt-24 md:pt-6 overflow-hidden max-w-7xl mx-auto gap-12">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[100px]" />
        </div>

        {/* Text Content */}
        <div className="z-10 flex-1 flex flex-col items-start gap-8 order-2 md:order-1">

          {/* Role / Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 backdrop-blur-sm">
            <Terminal className="w-3 h-3" />
            <span>Power Platform Developer & Systems Automation</span>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400">systems</span> that <br />
            run the business.
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            I don't just write code. I design and build internal tools, automation workflows, and operational systems that solve real business problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/resume" className="group relative px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all flex items-center gap-2">
              View Full Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="#skills" className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Core Competencies
            </Link>
          </div>

        </div>

        {/* Profile Image - Right Side */}
        <div className="z-10 flex-1 flex justify-center order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
            {/* Image */}
            <Image
              src="/profile.png"
              alt="Prince Raut Kurmi"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />

            {/* Blending Overlay - Vignette effect to blend image bg with page bg */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#0a0a0a_100%)] pointer-events-none" />

            {/* Subtle color tint to unify */}
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-600 font-mono text-sm animate-pulse">
          System Operational
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />

      {/* Footer */}
      <footer className="py-8 px-6 text-neutral-600 text-sm bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <p>© 2025 Prince Raut Kurmi.</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/theonly_realprince/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/prince.raut.90281" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Prince-Raut" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
