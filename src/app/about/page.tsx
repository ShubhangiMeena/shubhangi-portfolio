import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-gray-500">
              ABOUT ME
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              I enjoy turning ideas into useful software.
            </h1>
          </div>

          {/* Content */}
          <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
            {/* Introduction */}
            <div className="space-y-6 text-lg leading-8 text-gray-600">
              <p>
                I&apos;m a Software Engineer who enjoys building practical
                applications and solving real-world problems through
                technology. I like working across different parts of the
                software development process and understanding how technologies
                come together to create useful products.
              </p>

              <p>
                I enjoy learning new technologies, experimenting with different
                ideas, and turning them into projects that solve real problems.
              </p>

              <p>
                Currently, I&apos;m strengthening my skills in software
                development, Java, AWS, and cloud technologies while continuing
                to build and explore new projects.
              </p>
            </div>

            {/* Quick Info */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <p className="text-sm font-semibold tracking-widest text-gray-500">
                CURRENT FOCUS
              </p>

              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-gray-700">
                    Software Development
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-gray-700">
                    Java
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-gray-700">
                    AWS &amp; Cloud Technologies
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-gray-700">
                    Full-Stack Development
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Outside Coding */}
          <div className="mt-16 border-t border-gray-200 pt-10">
            <p className="max-w-3xl text-lg leading-8 text-gray-600">
              Outside of coding, I enjoy travelling, exploring new places,
              and discovering good food.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}