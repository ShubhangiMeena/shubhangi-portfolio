import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "Smart Bookmark Manager",
    description:
      "A full-stack bookmark management application with secure authentication, real-time updates, and user-specific data protection.",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Google OAuth",
    ],
    highlights: [
      "Implemented Google OAuth authentication and Row Level Security.",
      "Added real-time updates for bookmark changes.",
      "Built a responsive full-stack application using Next.js and Supabase.",
    ],
    github:
      "https://github.com/ShubhangiMeena/Smart-Bookmark-App",
  },

  {
    title: "Task Manager",
    description:
      "A task management application built to organize and manage tasks through a clean and responsive interface.",
    technologies: ["Vue.js", "Pinia", "Tailwind CSS"],
    highlights: [
      "Built reusable Vue.js components with centralized state management using Pinia.",
      "Created a responsive interface using Tailwind CSS.",
    ],
    github:
      "https://github.com/ShubhangiMeena/Task_Manager",
  },

  {
    title: "URL Shortener",
    description:
      "A lightweight URL shortening application that converts long URLs into shorter, shareable links.",
    technologies: ["Python", "Flask", "SQLite"],
    highlights: [
      "Built URL generation and redirection functionality using Flask.",
      "Used SQLite for persistent data storage.",
    ],
    github:
      "https://github.com/ShubhangiMeena/URL-Shortner",
  },

  {
    title: "Todo Application",
    description:
      "A CRUD-based Todo application built with ASP.NET MVC, following clean architecture principles and server-side rendering.",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "Dependency Injection",
      "Repository Pattern",
    ],
    highlights: [
      "Developed CRUD functionality using ASP.NET MVC and C#.",
      "Implemented Repository Pattern and Dependency Injection for separation of concerns.",
      "Added server-side validation and error handling.",
    ],
    github:
      "https://github.com/ShubhangiMeena/Todo-App",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Page Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-500">
              PROJECTS
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Selected Projects
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A selection of projects showcasing my experience across
              full-stack development, backend systems, and cloud technologies.
            </p>
          </div>

          {/* Project Cards */}
          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
              >
                {/* Title */}
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-7">
                  <p className="text-xs font-semibold tracking-widest text-gray-400">
                    KEY HIGHLIGHTS
                  </p>

                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-gray-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub */}
                <div className="mt-7 border-t border-gray-100 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-gray-500"
                  >
                    View on GitHub
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}