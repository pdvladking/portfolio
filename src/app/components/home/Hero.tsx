'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 bg-white dark:bg-black"
    >
      {/* Left Section: Text & CTA */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-900 dark:text-white">
  From ashes to algorithms—I'm <span className="text-red-600">Raja</span>
</h1>
<p className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed mx-auto md:mx-0">
  I forge interfaces with precision and intensity—clean layouts, immersive flows, and visual stories built to resonate. Each line of code carries heat, and every pixel reflects a purpose.
</p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-red-600 hover:bg-red-600 hover:text-white text-red-600 rounded-lg font-medium transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <Image
          src="/r2.webp" // Make sure this file is inside /public
          alt="Raja"
          width={384} // Equivalent to md:w-96
          height={384}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}