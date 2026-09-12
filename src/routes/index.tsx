import { ContactForm } from '#/components/contact-form'
import { Reveal } from '#/components/reveal'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { projects } from '#/lib/data'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center space-y-10 py-24 md:py-32 lg:py-40 text-center container mx-auto px-4">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Building digital products, <br className="hidden sm:inline" />
            <span className="text-primary">one pixel at a time.</span>
          </h1>
          <p className="mx-auto max-w-175 text-gray-500 md:text-xl dark:text-gray-400">
            I&apos;m a Software Engineer with 5+ years of experience building
            scalable, data-driven retail and supply chain solutions with .NET
            Core, React, and SQL Server.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#contact">
            <Button size="lg" className="font-semibold">
              Contact Me <ArrowRight className="ml-2 size-4" />
            </Button>
          </a>
          <a
            href="https://github.com/pradeepreddy999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <Reveal>
        <section id="about" className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-square lg:aspect-video overflow-hidden rounded-xl bg-linear-to-br from-primary/20 via-secondary/20 to-muted border border-border flex items-center justify-center">
                <span className="text-muted-foreground font-medium">
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

                <div className="space-y-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                  <p>
                    I build and maintain full-stack applications using .NET Core
                    Web API, React, and SQL Server, with a strong focus on
                    retail solutions — including Walmart deductions management
                    and store-specific order processing across the Walmart
                    supply chain.
                  </p>
                  <p>
                    I&apos;m adept at full-stack development, system design, and
                    performance optimization, with an emphasis on clean
                    architecture, maintainability, and business impact. I
                    spearheaded my company&apos;s first reusable React +
                    TypeScript component library, published via Azure Artifacts
                    and documented with Storybook to improve UI consistency
                    across teams.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-semibold mb-3 text-foreground">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'C#',
                      '.NET Core Web API',
                      'React.js',
                      'TypeScript',
                      'JavaScript ES6+',
                      'Redux Toolkit',
                      'SQL Server',
                      'jQuery',
                      'Bootstrap',
                      'MUI5',
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 text-sm bg-background border rounded-full shadow-sm"
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
      </Reveal>

      {/* EXPERIENCE SECTION */}
      <Reveal>
        <section
          id="experience"
          className="py-24 container px-4 md:px-6 mx-auto"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Experience
            </h2>
            <p className="text-muted-foreground max-w-150">
              Where I&apos;ve worked and what I&apos;ve built.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-xl">
                    Software Engineer · Inventiz
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    September 2021 – Present
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    Spearheaded the company&apos;s first reusable React +
                    TypeScript component library, published via Azure Artifacts
                    and documented with Storybook.
                  </li>
                  <li>
                    Built and maintained full-stack applications using .NET Core
                    Web API, React, and SQL Server for Walmart&apos;s supply
                    chain and vendor deductions systems.
                  </li>
                  <li>
                    Delivered retail analytics dashboards for Mars Grocery
                    United, Mars Big Box, and Mars RGB, serving retailers
                    including Kroger, HEB, Albertsons, and Publix.
                  </li>
                  <li>
                    Ensured clean architecture, maintainability, and performance
                    tuning for enterprise-grade software solutions.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-xl">
                    Software Intern · Inventiz
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    January 2021 – August 2021
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>
                    Participated in code reviews and testing activities to learn
                    software development best practices.
                  </li>
                  <li>
                    Supported integration of retailer-specific business rules
                    into analytics solutions and assisted in QA testing and
                    post-production support.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </Reveal>

      {/* FEATURED PROJECTS */}
      <Reveal>
        <section id="projects" className="py-24 container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-150">
              A selection of my favorite projects. Check out the case studies to
              learn how I built them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="flex flex-col h-full hover:border-primary/50 transition-colors"
              >
                <div className="aspect-video w-full bg-muted rounded-t-lg flex items-center justify-center text-muted-foreground border-b">
                  Project Image
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="font-normal text-xs"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: project.slug }}
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full group">
                      View Project
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/projects">
              <Button size="lg" variant="secondary">
                View All Projects <ArrowUpRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </section>
      </Reveal>

      {/* CONTACT SECTION */}
      <Reveal>
        <section id="contact" className="py-24 container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get in touch
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Have a project in mind or just want to say hi? I&apos;m always
                  open to discussing new opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted">
                    <Mail className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      pradeeppalavalli1999@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/pradeepreddy999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/github-mark.svg`}
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pradeep-reddy-palavalli-70159818b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/linkedin.svg`}
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <p className="text-muted-foreground text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
