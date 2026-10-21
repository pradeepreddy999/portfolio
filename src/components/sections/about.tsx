import { resume } from '#/lib/resume-data'

export function About() {
  return (
    <section id="about" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-border bg-linear-to-br from-primary/20 via-secondary/20 to-muted lg:aspect-video">
            <span className="font-medium text-muted-foreground">
              [ Your Profile Image Here ]
            </span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground">
                A glimpse into who I am and what I do.
              </p>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              <p>
                I build and maintain full-stack applications using .NET Core Web
                API, React, and SQL Server, with a strong focus on retail
                solutions — including Walmart deductions management and
                store-specific order processing across the Walmart supply chain.
              </p>
              <p>
                I&apos;m adept at full-stack development, system design, and
                performance optimization, with an emphasis on clean
                architecture, maintainability, and business impact. I
                spearheaded my company&apos;s first reusable React + TypeScript
                component library, published via Azure Artifacts and documented
                with Storybook to improve UI consistency across teams.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {resume.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-full border bg-background px-3 py-1 text-sm shadow-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
