import Navbar from "@/components/Navbar";

const experiences = [
  {
    company: "MeasureOne Solutions Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Aug 2021 – Sep 2023",
    location: "Ahmedabad, Gujarat",
    description:
      "Worked on backend development for a Consumer Data-as-a-Service platform, contributing to APIs, automation workflows, and data collection systems.",
    achievements: [
      "Developed and maintained backend APIs using Node.js and Express.js.",
      "Optimized data collection workflows, reducing collection time by approximately 30%.",
      "Built an automated document acquisition workflow using Node.js and Puppeteer, reducing manual effort.",
      "Worked with AWS S3 and CloudWatch for application data storage and monitoring.",
      "Collaborated with cross-functional teams to troubleshoot issues and improve application reliability.",
    ],
  },
  {
    company: "Jio Platforms Ltd.",
    role: "Software Engineering Intern",
    period: "Jan 2021 – Jul 2021",
    location: "Navi Mumbai , Maharashtra ",
    description:
      "Contributed to a Supply Chain Management project, working on backend APIs and data management.",
    achievements: [
      "Designed and developed REST APIs for application functionality.",
      "Worked on migrating application data to a NoSQL-based solution.",
      "Collaborated with developers to understand requirements and implement features.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-500">
              EXPERIENCE
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              My Professional Journey
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              A look at my professional experience, the products I&apos;ve
              worked on, and the problems I&apos;ve helped solve.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-16">

            {/* Timeline Line */}
            <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-gray-200 sm:block" />

            <div className="space-y-14">

              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.role}`}
                  className="relative sm:pl-12"
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-[3px] border-white bg-black shadow-sm sm:block" />

                  {/* Experience Card */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:border-gray-300 hover:shadow-md">

                    {/* Header */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <h2 className="text-2xl font-semibold tracking-tight">
                          {experience.role}
                        </h2>

                        <p className="mt-2 text-lg font-medium text-gray-700">
                          {experience.company}
                        </p>
                      </div>

                      <div className="shrink-0 sm:text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {experience.period}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {experience.location}
                        </p>
                      </div>

                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold tracking-widest text-gray-400">
                        KEY CONTRIBUTIONS
                      </p>

                      <ul className="mt-4 space-y-3">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex gap-3 text-base leading-7 text-gray-600"
                          >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}