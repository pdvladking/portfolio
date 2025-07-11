'use client';

export default function Hero() {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Premium Headline */}
        <h1 className="text-5xl md:text-6xl font-playfair italic text-indigo-600 dark:text-indigo-500 leading-tight mb-6">
          Raja System
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-light text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Designing scalable systems with clarity, emotion, and code precision. A journey through thoughtful UX, elegant logic, and grounded tech vision.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
        >
          Explore Projects
        </a>
      </div>
    </section>
  );
}