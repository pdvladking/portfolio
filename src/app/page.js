"use client";

import { motion } from "framer-motion";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview";
import SkillsSection from "./components/home/SkillsSection";
import ContactSection from "./components/home/ContactSection";
import ProjectSection from "./components/home/ProjectSection";
import Footer from "./components/home/Footer";
import ResumeSection from "./components/home/ResumeSection";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <Hero />
      <SkillsSection />
      <ProjectSection />
      <ResumeSection />
      <ContactSection />
      <AboutPreview />
      <Footer />
    </motion.main>
  );
}
