"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      title: "⚡ Rapid Prototyping",
      description:
        "I build modular React components with Tailwind—responsive, scalable, and visually tight. Deployment-ready in hours.",
    },
    {
      title: "🧩 Layout Precision",
      description:
        "Diagnosing spacing, proximity, and hierarchy issues in complex grids is second nature. I make interfaces feel intentional.",
    },
    {
      title: "🎨 Design Harmony",
      description:
        "Scroll rhythm, color transitions, and visual flow—every section feels unified, alive, and emotionally resonant.",
    },
    {
      title: "🛠️ Full-Stack Fluency",
      description:
        "Express + MongoDB APIs, protected routes, and live deployment to Vercel/Render. I troubleshoot across the stack.",
    },
    {
      title: "🧠 UI/UX Thinking",
      description:
        "I translate abstract ideas into clean, intuitive interfaces. Iterative design is my default—refine until it *feels* right.",
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
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