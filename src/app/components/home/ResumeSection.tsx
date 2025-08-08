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
        "Built and deployed a full-stack hospital management system with dynamic appointments, protected admin views, and modular UI",
        "Developed a responsive e-commerce platform with product showcase, cart logic, and full-stack integration",
        "Mastered React, Tailwind, Node.js, and MongoDB through real-world builds and debugging sprints",
        "Refined layout rhythm, scroll experience, and component structure through iterative design",
      ],
      certificate: {
        text: "Completed MERN Stack Training (Certificate No: MR-81075-MS)",
        link: "https://www.mindrisers.com.np/certificate/validate/MR-81075-MS",
      },
    },
    {
      role: "Creative Technologist & Portfolio Architect",
      company: "Personal Projects & Exploration",
      period: "Jul 2025 →",
      highlights: [
        "Designed and deployed a modular Next.js portfolio with unified layout, dark theme, and live project integration",
        "Curated digital identity through intentional branding, social anticipation, and narrative-driven design",
        "Using AI as a technical collaborator to accelerate execution and refine design logic",
        "Committed to clarity, momentum, and building tools that feel intentional and lasting",
      ],
      certificate: {
        text: "Completed FCC Responsive Web Design Certification (Certificate No: FCC-RWD-0725)",
        link: "https://www.freecodecamp.org/certification/rajathapa/responsive-web-design",
      },
    },
    {
      role: "Certified in Data Structures & Algorithms",
      company: "freeCodeCamp",
      period: "Aug 2025",
      highlights: [
        "Completed 300+ hours of rigorous algorithmic challenges and problem-solving",
        "Mastered recursion, dynamic programming, graph theory, and time complexity analysis",
        "Used AI-assisted workflows to accelerate learning and deepen conceptual clarity",
        "Built a foundation for scalable, performant full-stack systems",
      ],
      certificate: {
        text: "FCC Data Structures & Algorithms Certification (Certificate No: FCC-DSA-0825)",
        link: "https://www.freecodecamp.org/certification/rajathapa/javascript-algorithms-and-data-structures-v8",
      },
    },
  ];

  return (
    <section
      id="resume"
      className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-950 text-neutral-100"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight text-white">
          Resume
        </h2>
        <div className="space-y-8">
          {resume.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-red-500">
                  {item.role}
                </h3>
                <span className="text-sm text-neutral-400">{item.period}</span>
              </div>
              <p className="text-neutral-300 mb-3 font-medium">
                {item.company}
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-1 text-sm leading-relaxed">
                <li>
                  {item.certificate.text} –{" "}
                  <a
                    href={item.certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline"
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