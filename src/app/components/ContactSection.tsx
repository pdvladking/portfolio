"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white"
    >
      <div className="max-w-3xl mx-auto space-y-12 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold tracking-tight inline-block border-b-4 border-red-500 pb-2 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-white/70 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          Whether you’ve got a project, a question, or just want to say hi — I’d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-neutral-900 p-8 rounded-xl border border-red-500 shadow-md hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-shadow"
        >
          <form
            action="https://formspree.io/f/xanbpakz"
            method="POST"
            className="space-y-6 text-left"
          >
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-white/80">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder:text-white/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-white/80">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder:text-white/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder:text-white/40"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 text-sm rounded-full bg-red-500 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300 hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {[
              { label: "Email", href: "mailto:pdvladking@gmail.com" },
              { label: "GitHub", href: "https://github.com/pdvladking" },
              { label: "Instagram", href: "https://www.instagram.com/rajthapa_404/" },
              { label: "TikTok", href: "https://www.tiktok.com/@rajthapa_404" },
            ].map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border border-red-500 text-white/80 text-xs hover:text-white hover:bg-red-500 transition"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}