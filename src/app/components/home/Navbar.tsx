'use client';

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Branding */}
        <div className="relative text-2xl font-playfair font-bold tracking-wide animate-phoenix-shake-ash transition-transform duration-300 ease-in-out">
          <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text text-transparent drop-shadow-md animate-phoenix-shake-ash font-bold text-2xl tracking-wide">
            RAJA
          </span>

          {/* Spark Embers */}
          <span className="spark top-0 left-0" />
          <span className="spark top-0 right-0" />
          <span className="spark bottom-0 left-2" />
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <a href="#home" className="hover:text-red-600">Home</a>
          <a href="#projects" className="hover:text-red-600">Projects</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <a href="#resume" className="hover:text-red-600">Resume</a>
        </div>

        {/* Right: Icon stack */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-xl text-white hover:text-red-500 transition duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <HiMoon /> : <HiSun />}
            </button>
          )}

          {/* GitHub Icon */}
          <a
            href="https://github.com/pdvladking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-red-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Freelance Badge */}
          <span className="text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 font-medium hidden md:inline-block">
            Open to Freelance
          </span>
        </div>
      </div>
    </nav>
  );
}