import { SectionHeading } from '#/components/section-heading'
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
import { Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const featuredProjects = projects.slice(0, 3)

export function FeaturedProjects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-24 md:px-6">
      <SectionHeading
        title="Featured Work"
        description="A selection of my favorite projects. Check out the case studies to learn how I built them."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Card
            key={project.slug}
            className="flex h-full flex-col transition-colors hover:border-primary/50"
          >
            <div className="flex aspect-video w-full items-center justify-center rounded-t-lg border-b bg-muted text-muted-foreground">
              Project Image
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>

            <CardFooter>
              <Button variant="outline" className="group w-full" asChild>
                <Link to="/projects/$slug" params={{ slug: project.slug }}>
                  View Project
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button size="lg" variant="secondary" asChild>
          <Link to="/projects">
            View All Projects <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
