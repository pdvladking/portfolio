"use client";

import React from "react";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Leather Shop (E-Commerce)",
      description:
        "Full-stack product showcase with dynamic cart logic, responsive grid, and clean deployment. Built fast, shipped sharp.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://rj-mernstorm.vercel.app/",
    },
    {
      title: "Hospital Site",
      description:
        "Robust MERN platform with modular UI, dynamic appointments, patient records, and admin/doctor views. Real-world logic, real-time execution.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://mern-hospital-site.vercel.app/",
    },
    {
      title: "Portfolio Site",
      description:
        "Narrative-driven Next.js portfolio with locked dark theme, scroll rhythm, and accent borders. Identity meets execution.",
      tech: ["Next.js", "Framer Motion", "Vercel"],
      link: "https://ink-that-speaks.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Project Showcase
        </h2>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-neutral-200 rounded-lg p-6 hover:border-accent hover:shadow transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-700 mb-3">{project.description}</p>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}