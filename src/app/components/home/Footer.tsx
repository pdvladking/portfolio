"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Raj. All rights reserved.</p>

        {/* Socials */}
        <div className="flex gap-6">
          <a href="mailto:you@example.com" className="hover:text-accent transition">Email</a>
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-accent transition">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-accent transition">LinkedIn</a>
        </div>

        {/* Back to top */}
        <a href="#top" className="hover:text-accent transition hidden md:inline">Back to top ↑</a>
      </div>
    </footer>
  );
}