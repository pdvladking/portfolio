"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProjectSection() {
  const projects = [
    {
      title: "Hospital UI Revamp",
      description:
        "Advanced service grids, icon-based menus, and unified visual flow for a hospital web platform.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://your-hospital-project.com",
    },
    {
      title: "Portfolio Site",
      description:
        "Narrative-driven personal site showcasing skills, projects, and design philosophy.",
      tech: ["Next.js", "Tailwind", "Vercel"],
      link: "https://your-portfolio.com",
    },
    {
      title: "DNS Debug Toolkit",
      description:
        "System-level troubleshooting tools for DNS overrides, router config, and firmware analysis.",
      tech: ["Node.js", "Shell", "Netlify"],
      link: "https://your-dns-toolkit.com",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white text-neutral-900"
    >
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }} // ⬅️ reduced duration & stagger
              className="group bg-neutral-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-neutral-200 hover:border-accent"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
                {project.title}
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs bg-neutral-200 text-neutral-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}