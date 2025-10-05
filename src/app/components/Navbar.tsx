'use client';

import { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo as Home Button with Lava Sparks */}
        <a href="#home" className="cursor-pointer">
          <div className="relative text-2xl font-playfair font-bold tracking-wide animate-phoenix-shake-ash transition-transform duration-300 ease-in-out">
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text text-transparent drop-shadow-md animate-phoenix-shake-ash font-bold text-2xl tracking-wide">
              RAJA
            </span>
            <span className="spark top-0 left-0" style={{ animationDelay: '0s' }} />
            <span className="spark top-0 right-0" style={{ animationDelay: '0.4s' }} />
            <span className="spark bottom-0 left-2" style={{ animationDelay: '0.8s' }} />
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <a href="#projects" className="hover:text-red-600">Projects</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#resume" className="hover:text-red-600">Resume</a>
        </div>

        {/* Right: Icon Stack + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/pdvladking"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-xl text-white hover:text-red-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/rajthapa_404/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-xl text-white hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@rajthapa_404"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-xl text-white hover:text-gray-300 transition duration-300"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="#contact"
            className="px-3 py-1 text-xs rounded-full bg-black text-white font-semibold border border-[#ff3c3c] shadow-md hover:scale-105 transition-transform duration-300 animate-shine"
          >
            Open to Freelance
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            aria-label="Toggle Menu"
          >
            <span className="transition-opacity duration-300">
              {isOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4 px-6 shadow-lg">
          <a href="#projects" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#about" className="hover:text-red-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#resume" className="hover:text-red-600" onClick={() => setIsOpen(false)}>Resume</a>
        </div>
      )}
    </nav>
  );
}