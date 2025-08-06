'use client';

import React from "react";
import { FaGithub, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Raj. All rights reserved.</p>

        {/* Socials */}
        <div className="flex gap-6 text-xl">
          <a href="mailto:pdvladking@gmail.com" className="hover:text-accent transition" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/pdvladking" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rajthapa_404/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@rajthapa_404" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="TikTok">
            <FaTiktok />
          </a>
        </div>

        {/* Back to top */}
        <a href="#top" className="hover:text-accent transition hidden md:inline">Back to top ↑</a>
      </div>
    </footer>
  );
}