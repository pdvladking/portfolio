"use client";

import { motion } from "framer-motion";

export default function ResumeSection() {
  const resume = [
    {
      role: "UI/UX Designer & Full-Stack Developer",
      company: "Mindrisers Institute of Technology",
      period: "Jan 2025 – Present",
      highlights: [
        "Strengthened full-stack fluency by architecting real-world systems with modular UI and protected routes",
        "Refined debugging intuition and component isolation through iterative deployment sprints",
        "Developed layout rhythm and scroll logic aligned with user flow and backend architecture",
        "Gained tactical clarity in React, Tailwind, Node.js, and MongoDB through hands-on execution",
      ],
      certificate: {
        text: "Completed MERN Stack Training (Certificate No: MR-81075-MS)",
        link: "https://www.mindrisers.com.np/certificate/validate/MR-81075-MS",
      },
    },
    {
      role: "Narrative Designer",
      company: "Personal Projects & Exploration",
      period: "Jul 2025 →",
      highlights: [
        "Refined personal branding through narrative-driven design and emotional tone calibration",
        "Integrated AI as a tactical collaborator to accelerate execution and deepen design logic",
        "Developed layout systems that balance clarity, rhythm, and long-term maintainability",
        "Explored visual storytelling through scroll-triggered motion, scent-inspired gradients, and ambient overlays",
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
      className="scroll-mt-24 py-28 px-6 md:px-12 lg:px-24 bg-neutral-950 text-neutral-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          <span className="inline-block border-b-4 border-red-500 pb-2">
            Resume
          </span>
        </h2>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {resume.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-neutral-900 p-8 rounded-xl border border-red-500 shadow-md hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-red-400">
                  {item.role}
                </h3>
                <span className="text-sm text-neutral-400">{item.period}</span>
              </div>
              <p className="text-sm text-white/80 mb-4 font-medium">
                {item.company}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-white/90 leading-relaxed">
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