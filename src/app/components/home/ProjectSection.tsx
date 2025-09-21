"use client";

import React from "react";
import Image from "next/image";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Leather Shop (E-Commerce)",
      description:
        "Full-stack product showcase with dynamic cart logic, responsive grid, and clean deployment. Built fast, shipped sharp.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://rj-mernstorm.vercel.app/",
      image: "/images/leather-shop-thumb.webp",
    },
    {
      title: "Hospital Site",
      description:
        "Robust MERN platform with modular UI, dynamic appointments, patient records, and admin/doctor views. Real-world logic, real-time execution.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://mern-hospital-site.vercel.app/",
      image: "/images/hospital-thumb.webp",
    },
    {
      title: "Eden Tattoo Studio",
      description:
        "Narrative-driven Next.js website with locked dark theme, scroll rhythm, and accent borders. Identity meets execution.",
      tech: ["Next.js", "Framer Motion", "Vercel"],
      link: "https://eden-tattoo-studio.vercel.app/",
      image: "/images/eden-tattoo-thumb.webp",
    },
    {
      title: "Event Portal",
      description:
        "Real-time MERN event platform with dynamic template selector, RSVP flow, and responsive layout. Built under pressure, shipped with precision.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Vercel"],
      link: "https://aws-lambda-mern-event-portal.vercel.app/",
      image: "/images/event-portal-thumb.webp",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 px-6 md:px-12 lg:px-24 bg-neutral-200 text-neutral-900"
    >
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block border-b-2 border-red-500 bg-neutral-100 px-4 py-2 rounded">
          Project Showcase
        </h2>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-neutral-900 text-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-2 border-red-500 pulse-border"
            >
              <div className="relative w-full h-48 mb-4 border-2 border-red-500 rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105 hover:grayscale-0 grayscale"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs bg-red-500 text-white rounded"
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