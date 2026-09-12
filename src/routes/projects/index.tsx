import { Link, createFileRoute } from '@tanstack/react-router'
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
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <div className="mb-12 space-y-4">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors"
        >
          <ArrowLeft className="mr-2 size-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of projects I&apos;ve built, from small experiments to
          full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="flex flex-col hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video w-full bg-muted/50 rounded-t-lg flex items-center justify-center text-muted-foreground">
              Project Screenshot
            </div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <span className="text-sm text-muted-foreground">
                  {project.date}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>

            <CardFooter>
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="w-full"
              >
                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
