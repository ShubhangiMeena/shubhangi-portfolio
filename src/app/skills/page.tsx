import Navbar from "@/components/Navbar";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot"],
  },
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Terraform", "CI/CD", "Git", "GitHub"],
  },
  {
    title: "AI & Developer Tools",
    skills: [
      "Claude",
      "GitHub Copilot",
      "Cursor",
      "AI-Assisted Coding",
      "Postman",
      "Puppeteer",
      "CloudWatch",
      "Datadog",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">

          {/* Page Heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-500">
              SKILLS
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Technologies & Tools
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Technologies I&apos;ve worked with professionally, used in
              projects, or am currently developing deeper expertise in.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
              >
                {/* Category */}
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-black" />

                  <h2 className="text-lg font-semibold tracking-tight">
                    {group.title}
                  </h2>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition duration-200 hover:bg-black hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}