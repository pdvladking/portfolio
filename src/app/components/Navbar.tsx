'use client';

export default function Navbar() {
  return (
    <nav className="bg-indigo-500 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand Name */}
        <h1 className="font-playfair italic text-2xl tracking-tight">
          rajsystem.dev
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:underline transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}