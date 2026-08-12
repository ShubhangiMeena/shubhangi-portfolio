import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden px-6 py-20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          {/* Main soft glow */}
          <div className="absolute left-1/2 top-[45%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-50 blur-3xl" />

          {/* Small decorative circles */}
          <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-gray-300" />
          <div className="absolute right-[12%] top-[30%] h-3 w-3 rounded-full bg-gray-200" />
          <div className="absolute bottom-[20%] left-[18%] h-2 w-2 rounded-full bg-gray-200" />
          <div className="absolute bottom-[25%] right-[20%] h-2 w-2 rounded-full bg-gray-300" />

          {/* Very subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-5xl text-center">
          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-600 shadow-sm backdrop-blur-sm transition hover:border-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>

            Open to Software Engineering opportunities
          </div>

          {/* Role */}
          <p className="text-xs font-semibold tracking-[0.35em] text-gray-400 sm:text-sm">
            SOFTWARE ENGINEER
          </p>

          {/* Name */}
          <h1 className="mt-6 text-[4.5rem] font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[9rem]">
            Shubhangi
            <br />
            <span className="text-gray-300">Meena</span>
          </h1>

          {/* Introduction */}
          <p className="mx-auto mt-9 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            I build practical software applications with a focus on
            <span className="font-medium text-gray-800">
              {" "}
              backend engineering, full-stack development, and cloud
              technologies.
            </span>
          </p>

          {/* Contact Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {/* Email */}
            <a
              href="mailto:shubhangimeena.cse@gmail.com"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs transition-all duration-300 group-hover:bg-black group-hover:text-white">
                @
              </span>

              <span>Email Me</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shm2512/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:text-white">
                in
              </span>

              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ShubhangiMeena"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold transition-all duration-300 group-hover:bg-black group-hover:text-white">
                GH
              </span>

              <span>GitHub</span>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-xl"
            >
              <span>Resume</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-3 text-gray-300">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
              Explore
            </span>

            <div className="flex h-8 w-5 justify-center rounded-full border border-gray-200 pt-1.5">
              <span className="h-1.5 w-1 rounded-full bg-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-6 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Shubhangi Meena</p>

          <p>
            Built with <span className="text-gray-600">Next.js</span>
          </p>
        </div>
      </footer>
    </main>
  );
}