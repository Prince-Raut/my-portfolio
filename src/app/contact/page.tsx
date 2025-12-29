"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setStatus((current) => (current === "loading" ? "idle" : current));
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-200 p-6 md:p-12 font-sans">
      <section className="max-w-3xl mx-auto bg-neutral-900/40 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Me
        </h1>
        <p className="text-neutral-400 mb-8">
          Have a project in mind, need help with Power Platform, or just want to say hi?
          Use the form below and it will send your message directly to my inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-neutral-200">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-neutral-200">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-neutral-200">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              placeholder="Project inquiry, collaboration, etc."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
              placeholder="Tell me a bit about what you need help with..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-emerald-400">
            Thanks! Your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            {error || "Something went wrong. Please try again later."}
          </p>
        )}

        <p className="mt-6 text-xs text-neutral-500">
          Or email me directly at{" "}
          <a
            href="mailto:princeraut9327@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 underline-offset-2 hover:underline"
          >
            princeraut9327@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}


