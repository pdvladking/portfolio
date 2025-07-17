"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white text-neutral-900"
    >
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // ⬅️ reduced from 0.6
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-neutral-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }} // ⬅️ reduced duration & delay
        >
          Whether you’ve got a project, a question, or just want to say hi — I’d love to hear from you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }} // ⬅️ reduced duration & delay
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              type="text"
              id="name"
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
              id="email"
              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-neutral-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 bg-neutral-100 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-white rounded hover:bg-accent-dark transition font-medium"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.45 }} // ⬅️ reduced duration & delay
        >
          <div className="flex justify-center gap-6 text-sm text-neutral-600">
            <a
              href="mailto:you@example.com"
              className="hover:text-accent transition underline underline-offset-4"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-accent transition underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-accent transition underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}