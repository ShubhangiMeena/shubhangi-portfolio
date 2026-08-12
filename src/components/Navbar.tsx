export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="/"
          className="text-lg font-bold text-white"
        >
          Shubhangi Meena
        </a>

        {/* Navigation */}
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
      </div>
    </nav>
  );
}