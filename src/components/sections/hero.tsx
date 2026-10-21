import { Button } from '#/components/ui/button'
import { resume } from '#/lib/resume-data'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center space-y-10 px-4 py-24 text-center md:py-32 lg:py-40">
      <div className="max-w-3xl space-y-4">
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
        <Button size="lg" className="font-semibold" asChild>
          <a href="#contact">
            Contact Me <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href={resume.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </section>
  )
}
