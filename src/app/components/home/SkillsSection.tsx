"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      title: "⚡ Rapid Prototyping",
      description:
        "I translate visual concepts into modular React components with Tailwind—fast, clean, and scalable.",
    },
    {
      title: "🧩 Layout Precision",
      description:
        "Diagnosing spacing, proximity, and alignment issues is second nature. I make grids feel intentional.",
    },
    {
      title: "🎨 Design Harmony",
      description:
        "I build with flow—every section, every pixel, every interaction feels unified and alive.",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-200 text-neutral-900"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }} // ⬅️ reduced duration & stagger
              className="bg-neutral-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{skill.title}</h3>
              <p className="text-neutral-700 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}