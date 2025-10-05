"use client";

import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="py-16 px-6 text-center bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold tracking-tight inline-block border-b-2 border-red-500 px-4 py-2 rounded"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        The{" "}
        <span
          className="text-red-500"
          style={{ fontFamily: "var(--font-satisfy)" }}
        >
          Mind
        </span>{" "}
        Behind the <span className="text-red-500">Motion</span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        I build responsive websites, design clean interfaces, and develop full-stack applications using modern tools like React, Node.js, and MongoDB.
      </motion.p>
    </section>
  );
}