"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "⚡ Design & Prototyping",
      description:
        "Modular React components, scroll rhythm, and layout precision. I build interfaces that feel intentional, unified, and deployment-ready.",
    },
    {
      title: "🛠️ Full-Stack Execution",
      description:
        "From Express APIs to protected routes and live deployment—I troubleshoot across the stack and translate abstract ideas into intuitive flows.",
    },
    {
      title: "🌐 Creative Expansion",
      description:
        "Exploring personal branding, model scouting, and social anticipation. I blend tech, design, and presence into new ventures.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-200 text-neutral-900"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block border-b-2 border-red-500 bg-neutral-100 px-4 py-2 rounded">
          Core Skills
        </h2>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.2,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="bg-neutral-900 text-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-red-500 pulse-border"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {group.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}