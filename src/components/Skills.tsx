const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Terraform", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium text-gray-500">
          SKILLS
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Technologies I Work With
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}