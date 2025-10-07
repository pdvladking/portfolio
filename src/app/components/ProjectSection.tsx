"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Leather Shop (E-Commerce)",
      description:
        "Full-stack product showcase with dynamic cart logic, responsive grid, and clean deployment.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://rj-mernstorm.vercel.app/",
      image: "/images/rawhide.webp",
    },
    {
      title: "Hospital Site",
      description:
        "Robust MERN platform with modular UI, dynamic appointments, patient records, and admin/doctor views.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://mern-hospital-site.vercel.app/",
      image: "/images/hospital-thumb.webp",
    },
    {
      title: "Eden Tattoo Studio",
      description:
        "Narrative-driven Next.js website with locked dark theme, scroll rhythm, and accent borders.",
      tech: ["Next.js", "Framer Motion", "Vercel"],
      link: "https://edentattoonepal.com.np/",
      image: "/images/eden.webp",
    },
    {
      title: "Event Portal",
      description:
        "Real-time MERN event platform with dynamic template selector, RSVP flow, and responsive layout.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Vercel"],
      link: "https://aws-lambda-mern-event-portal.vercel.app/",
      image: "/images/events-portal.webp",
    },
    {
      title: "Multi-Tenant Notes App",
      description:
        "MERN stack notes app with multi-tenant support, role-based access, and subscription limits.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "https://notes-app-sigma-navy.vercel.app/",
      image: "/images/notes-app.webp",
    },
    {
  title: "IELTS Institute",
  description: "Responsive frontend website for an IELTS coaching center. Built with React and styled for clarity, speed, and mobile-first performance.",
  tech: ["React", "Tailwind CSS", "Vercel"],
  link: "https://ielts-institute-ten.vercel.app/",
  image: "/images/ielts-institute.webp",
}
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-10"
        >
          <span className="inline-block border-b-4 border-red-500 pb-2">
            Portfolio
          </span>
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="group bg-neutral-800 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-red-500"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-red-400 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-snug">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs bg-red-500 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}