"use client";

import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="py-16 px-6 text-center bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }} // ⬅️ reduced from 0.6
      >
        The Mind Behind the Motion
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }} // ⬅️ reduced duration & delay
      >
        I wasn’t born into tech—I built my way here. From late-night debugging to bringing ideas back from the brink, I write code with grit and clarity. The fire isn’t just in the gradients—it’s in the journey.
      </motion.p>
    </section>
  );
}