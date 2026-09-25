import { Link, createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/card'
import { tutorials } from '#/lib/tutorials'
import { useTutorialProgress } from '#/lib/tutorials/progress'
import { ArrowLeft, Calendar, Check, Clock } from 'lucide-react'

export const Route = createFileRoute('/tutorials/')({
  component: TutorialsPage,
})

function TutorialsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <div className="mb-12 space-y-4 text-center md:text-left">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ArrowLeft className="mr-2 size-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Tutorials
        </h1>
        <p className="text-xl text-muted-foreground">
          Step-by-step guides on the tools and techniques I use.
        </p>
      </div>

      {tutorials.length === 0 ? (
        <p className="text-muted-foreground">
          No tutorials published yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              to="/tutorials/$slug"
              params={{ slug: tutorial.slug }}
            >
              <Card className="h-full hover:bg-muted/50 transition-colors border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {tutorial.difficulty}
                    </Badge>
                    <span className="flex items-center gap-3">
                      <ProgressBadge slug={tutorial.slug} />
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="mr-1 size-3" /> {tutorial.readTime}
                      </span>
                    </span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary">
                    {tutorial.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center mt-2">
                    <Calendar className="mr-2 size-4" />
                    {tutorial.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {tutorial.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function ProgressBadge({ slug }: { slug: string }) {
  const { visited, total } = useTutorialProgress(`/tutorials/${slug}`)
  if (visited.length === 0 || total === 0) return null
  const done = Math.min(visited.length, total)
  return (
    <span className="flex items-center text-xs text-emerald-600 dark:text-emerald-400">
      <Check className="mr-1 size-3" /> {done}/{total} visited
    </span>
  )
}
