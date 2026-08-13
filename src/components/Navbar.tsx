"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold text-white"
        >
          Shubhangi Meena
        </a>

        {/* Desktop Navigation */}
        <div className="hidden gap-6 text-sm md:flex">
          <a
            href="/"
            className="text-white transition hover:text-gray-400"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-white transition hover:text-gray-400"
          >
            About
          </a>

          <a
            href="/experience"
            className="text-white transition hover:text-gray-400"
          >
            Experience
          </a>

          <a
            href="/skills"
            className="text-white transition hover:text-gray-400"
          >
            Skills
          </a>

          <a
            href="/projects"
            className="text-white transition hover:text-gray-400"
          >
            Projects
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-800 bg-black px-6 py-4 md:hidden">
          <div className="flex flex-col gap-5 text-sm">
            <a
              href="/"
              onClick={closeMenu}
              className="text-white transition hover:text-gray-400"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={closeMenu}
              className="text-white transition hover:text-gray-400"
            >
              About
            </a>

            <a
              href="/experience"
              onClick={closeMenu}
              className="text-white transition hover:text-gray-400"
            >
              Experience
            </a>

            <a
              href="/skills"
              onClick={closeMenu}
              className="text-white transition hover:text-gray-400"
            >
              Skills
            </a>

            <a
              href="/projects"
              onClick={closeMenu}
              className="text-white transition hover:text-gray-400"
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}