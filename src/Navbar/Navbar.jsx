import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/aab.jpg"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <h1 className="text-lg md:text-xl font-bold text-blue-600 tracking-wide">
            Mohit S
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-sm font-medium">
          <Link
            to="/"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 ease-in-out"
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 ease-in-out"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="/github"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease-in-out"
          >
            Github
          </Link>
          <Link
            to="/resume"
            className="px-4 py-2 rounded-full border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-white transition-all duration-300 ease-in-out"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium flex flex-col">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
          >
            About Me
          </Link>
          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
          >
            Contact
          </Link>
          <Link
            to="/github"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-black hover:text-white hover:border-black transition"
          >
            Github
          </Link>
          <Link
            to="/resume"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-purple-400 hover:text-white hover:border-white transition"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
