import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Subtle Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-100 blur-3xl" />
        </div>

        <div className="w-full max-w-5xl text-center">

          {/* Availability */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to Software Engineering opportunities
          </div>

          {/* Role */}
          <p className="text-sm font-semibold tracking-[0.3em] text-gray-500">
            SOFTWARE ENGINEER
          </p>

          {/* Name */}
          <h1 className="mt-5 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Shubhangi
            <br />
            <span className="text-black">Meena</span>
          </h1>

          {/* Introduction */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            I build practical software applications and enjoy exploring
            backend, full-stack, and cloud technologies.
          </p>

          {/* Contact Links */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {/* Email */}
            <a
              href="mailto:shubhangimeena.cse@gmail.com"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs transition group-hover:bg-black group-hover:text-white">
                @
              </span>

              <span>Email Me</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shm2512/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold transition group-hover:bg-black group-hover:text-white">
                in
              </span>

              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ShubhangiMeena"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-bold transition group-hover:bg-black group-hover:text-white">
                GH
              </span>

              <span>GitHub</span>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-md"
            >
              <span>Resume</span>
              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Shubhangi Meena</p>

          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}