import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { getProject } from '#/lib/data'
import { orNotFound } from '#/lib/utils'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Code2, Globe } from 'lucide-react'
import Markdown from 'react-markdown'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => orNotFound(getProject(params.slug)),
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.title} | Projects` : 'Projects',
      },
      { name: 'description', content: loaderData?.description ?? '' },
    ],
  }),
  component: ProjectPage,
})

function ProjectPage() {
  const project = Route.useLoaderData()

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <Link
        to="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 size-4" /> Back to Projects
      </Link>

      <div className="space-y-6 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 items-center justify-between border-b pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline" className="text-sm py-1">
                {t}
              </Badge>
            ))}
          </div>
          <span className="text-muted-foreground font-medium">
            {project.date}
          </span>
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-4">
            {project.githubUrl && (
              <Button asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code2 className="mr-2 size-4" /> View Source
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="mr-2 size-4" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="aspect-video w-full bg-muted rounded-xl mb-12 flex items-center justify-center text-muted-foreground border">
        <span>Project Screenshot / Video Demo</span>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown>{project.content}</Markdown>
      </div>
    </article>
  )
}
