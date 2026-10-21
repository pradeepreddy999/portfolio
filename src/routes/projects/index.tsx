import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '#/components/page-header'
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
import { ArrowUpRight } from 'lucide-react'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <PageHeader
        title="Projects"
        description="A collection of projects I've built, from small experiments to full-stack applications."
      />

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
              <Button variant="outline" className="group w-full" asChild>
                <Link to="/projects/$slug" params={{ slug: project.slug }}>
                  View Case Study
                  <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
