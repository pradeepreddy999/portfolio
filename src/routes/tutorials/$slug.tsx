import { getTutorial } from '#/lib/tutorials'
import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Markdown from 'react-markdown'

export const Route = createFileRoute('/tutorials/$slug')({
  loader: ({ params }) => {
    const tutorial = getTutorial(params.slug)
    if (!tutorial) throw notFound()
    return tutorial
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} | Tutorials` : 'Tutorials' },
      { name: 'description', content: loaderData?.excerpt ?? '' },
    ],
  }),
  component: TutorialPage,
})

function TutorialPage() {
  const tutorial = Route.useLoaderData()

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <Link
        to="/tutorials"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="mr-2 size-4" /> Back to Tutorials
      </Link>

      <div className="space-y-4 border-b pb-8 mb-8">
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
            {tutorial.difficulty}
          </span>
          {tutorial.stack.map((tech) => (
            <span
              key={tech}
              className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight">
          {tutorial.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 size-4" />
            {tutorial.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 size-4" />
            {tutorial.readTime}
          </div>
        </div>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown>{tutorial.content}</Markdown>
      </div>
    </article>
  )
}
