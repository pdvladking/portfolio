"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import ResumeSection from "./components/ResumeSection";
import WhatsAppButton from "./components/WhatsAppButton";

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
      <ProjectSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      <AboutPreview />
      <Footer />
      <WhatsAppButton />
    </motion.main>
  );
}
