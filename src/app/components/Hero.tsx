'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-900 text-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Section: Text & CTA */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            UI/UX{" "}
            <span
              className="text-red-500"
              style={mounted ? { fontFamily: "var(--font-satisfy)" } : undefined}
            >
              Designer
            </span>{" "}
            & Full-Stack <span className="text-red-500">Developer</span>
          </h1>
          <p className="text-md md:text-lg text-neutral-300 max-w-md leading-relaxed mx-auto md:mx-0">
            I design with intent and build with precision. Every interface, every line of code—engineered to be fast, clear, and impactful.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <a
              href="#projects"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition duration-300"
            >
              🚀 View Projects
            </a>
            <a
              href="/raja-thapa-resume.pdf"
              download
              className="px-6 py-2 border border-red-500 hover:bg-red-500 hover:text-white text-red-500 rounded-lg font-medium transition duration-300"
            >
              📄 Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section: Glowing Avatar */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-avatar-glow" />
            <Image
              src="/images/hero.webp"
              alt="Raja"
              width={384}
              height={384}
              priority
              className="rounded-full border-4 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.5)]"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#about"
          className="animate-bounce text-neutral-400 hover:text-red-500 transition text-2xl"
        >
          ↓
        </a>
      </motion.div>
    </section>
  );
}