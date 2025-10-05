"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiVercel,
  SiGit,
  SiGithub,
  SiRender,
  SiPostman,
  SiChartdotjs,
  SiNpm,
  SiYarn,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: [
      { name: "React", icon: <SiReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-purple-500" /> },
      { name: "anime.js", icon: <span className="text-purple-400">✨</span> },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-red-500" /> },
      { name: "REST APIs", icon: <span className="text-red-500">🔗</span> },
    ],
    DevOps: [
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Render", icon: <SiRender className="text-teal-500" /> },
    ],
    Tools: [
      { name: "VS Code", icon: <FaCode className="text-blue-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
      { name: "Chart.js", icon: <SiChartdotjs className="text-pink-600" /> },
      { name: "NPM", icon: <SiNpm className="text-red-600" /> },
      { name: "Yarn", icon: <SiYarn className="text-blue-500" /> },
    ],
  };

  return (
    <section
      id="skills"
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
            Skills
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
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-800 text-white rounded-2xl shadow-lg p-6 border border-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-shadow"
            >
              <h3 className="text-lg font-semibold tracking-wide mb-4 text-red-500">
                {category}
              </h3>
              <ul className="space-y-2 text-sm text-white/90">
                {items.map(({ name, icon }, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(255,0,0,0.4)]"
                  >
                    {icon}
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}