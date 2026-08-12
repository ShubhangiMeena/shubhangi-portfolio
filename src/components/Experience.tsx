const experiences = [
  {
    company: "MeasureOne Solutions Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Aug 2021 – Sep 2023",
    description:
      "Worked on backend development for a Consumer Data-as-a-Service platform, building APIs and automated data collection workflows.",
    achievements: [
      "Developed backend services and APIs using Node.js and Express.js.",
      "Optimized data collection workflows, reducing collection time by approximately 30%.",
      "Built an automated document acquisition system using Node.js and Puppeteer.",
      "Worked with AWS services including S3 and CloudWatch.",
    ],
  },
  {
    company: "Jio Platforms Ltd.",
    role: "Software Engineering Intern",
    period: "Jan 2021 – Jul 2021",
    description:
      "Worked on a Supply Chain Management project, contributing to backend APIs and data management.",
    achievements: [
      "Designed and developed REST APIs.",
      "Worked on migrating application data to a NoSQL-based solution.",
      "Collaborated with the team to understand business and technical requirements.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-sm font-medium text-gray-500">
          EXPERIENCE
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Professional Experience
        </h2>

        <div className="mt-12 space-y-12">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="border-l-2 border-gray-200 pl-6"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="mt-1 font-medium text-gray-600">
                    {experience.company}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  {experience.period}
                </p>
              </div>

              <p className="mt-4 leading-7 text-gray-600">
                {experience.description}
              </p>

              <ul className="mt-4 space-y-2 text-gray-600">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2">
                    <span>•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}