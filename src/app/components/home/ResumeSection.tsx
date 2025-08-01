"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  const resume = [
    {
      role: "UI/UX Designer & Full-Stack Developer",
      company: "Mindrisers Institute of Technology",
      period: "Jan 2025 – Present",
      highlights: [
        "Mastered React, Tailwind, Node.js, and MongoDB through hands-on projects",
        "Built and deployed a full-stack hospital management system with protected admin panel",
        "Refined layout logic, scroll rhythm, and component structure through iterative design",
        "Developed speed, precision, and system-level troubleshooting skills",
      ],
      certificate: {
        text: "Completed MERN Stack Training (Certificate No: MR-81075-MS)",
        link: "https://www.mindrisers.com.np/certificate/validate/MR-81075-MS",
      },
    },
    {
      role: "Creative Technologist & Portfolio Architect",
      company: "Personal Projects & Exploration",
      period: "2025 →",
      highlights: [
        "Designed and deployed a modular Next.js portfolio with unified layout and live integration",
        "Exploring personal branding, model scouting, and social anticipation as creative extensions",
        "Using AI as a technical collaborator to accelerate growth and refine design logic",
        "Committed to clarity, momentum, and building tools that feel intentional and lasting",
      ],
      certificate: {
        text: "Completed FCC Responsive Web Design Certification (Certificate No: FCC-RWD-0725)",
        link: "https://www.freecodecamp.org/certification/RajaThapa/responsive-web-design",
      },
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
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border border-neutral-300 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-accent">{item.role}</h3>
                <span className="text-sm text-neutral-500">{item.period}</span>
              </div>
              <p className="text-neutral-600 mb-3 font-medium">{item.company}</p>
              <ul className="list-disc list-inside text-neutral-700 space-y-1 text-sm leading-relaxed">
                <li>
                  {item.certificate.text} –{" "}
                  <a
                    href={item.certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    View Certificate →
                  </a>
                </li>
                {item.highlights.map((point, j) => (
                  <li key={j + "highlight"}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}