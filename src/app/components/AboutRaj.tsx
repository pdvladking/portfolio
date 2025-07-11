'use client';

import Image from 'next/image';

export default function AboutRaj() {
  return (
    <section id="about" className="px-6 py-24 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">

        {/* Full-width Raj Name */}
        <h1 className="text-5xl font-playfair italic tracking-tight text-indigo-600 dark:text-indigo-400">
          Raj System
        </h1>

        {/* Subheadline Line */}
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Born in Baisakh, grounded in Taurus — designing for tomorrow.
        </p>

        {/* Large Profile Photo */}
        <div className="w-full">
          <Image
            src="/raj.webp"
            alt="Raj Profile"
            width={600}
            height={800}
            className="rounded-md object-cover opacity-95 shadow-md mx-auto"
            priority
          />
        </div>

        {/* Short Bio */}
        <p className="text-lg font-light text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
          Frontend developer blending minimalism with clarity. I craft systems with emotion, structure, and technical elegance—each component designed to feel like it belongs.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow transition"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 hover:bg-indigo-500 text-indigo-600 hover:text-white px-6 py-3 rounded-full transition"
          >
            Hire Me
          </a>
        </div>

      </div>
    </section>
  );
}