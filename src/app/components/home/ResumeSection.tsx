"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  const resume = [
    {
      role: "Aspiring UI/UX Designer & Full-Stack Developer",
      company: "Mindrisers Institute of Technology",
      period: "Jan 2025 – Present",
      highlights: [
        "Completed MERN Stack Training (Certificate No: MR-81075-MS)",
        "Learning to master React, Tailwind, Node.js, and MongoDB",
        "Designing interfaces with precision, clarity, and unified visual rhythm",
        "Developing dummy projects to refine layout logic, component structure, and scroll experience",
        "Building speed, accuracy, and organizational skill through iterative practice",
      ],
    },
    {
      role: "Future-Facing Developer",
      company: "Personal Projects & Exploration",
      period: "2025 →",
      highlights: [
        "Rapid prototyping of UI concepts and component systems",
        "Applying design thinking to layout experiments and form logic",
        "Using AI as a technical collaborator to accelerate growth",
        "Committed to clarity, momentum, and building tools that feel intentional",
      ],
    },
  ];

  return (
    <section
      id="resume"
      className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-200 text-neutral-900"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight">Resume</h2>
        <div className="space-y-8">
          {resume.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }} // ⬅️ reduced duration & stagger
              className="bg-white p-6 rounded-xl border border-neutral-300 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-accent">{item.role}</h3>
                <span className="text-sm text-neutral-500">{item.period}</span>
              </div>
              <p className="text-neutral-600 mb-3 font-medium">{item.company}</p>
              <ul className="list-disc list-inside text-neutral-700 space-y-1 text-sm leading-relaxed">
                {item.highlights.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}