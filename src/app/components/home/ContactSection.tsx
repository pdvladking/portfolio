"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-200 text-neutral-900"
    >
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight inline-block border-b-2 border-red-500 bg-neutral-100 px-4 py-2 rounded"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          Whether you’ve got a project, a question, or just want to say hi — I’d love to hear from you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/xanbpakz"
          method="POST"
          className="space-y-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-neutral-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-xs rounded-full bg-black text-white font-semibold border border-[#ff3c3c] shadow-md hover:scale-105 transition-transform duration-300 animate-shine"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
            <a
              href="mailto:pdvladking@gmail.com"
              className="hover:text-accent transition underline underline-offset-4"
            >
              Email
            </a>
            <a
              href="https://github.com/pdvladking"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/rajthapa_404/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition underline underline-offset-4"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@rajthapa_404"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition underline underline-offset-4"
            >
              TikTok
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}