import { Link, createFileRoute } from '@tanstack/react-router'
import { ContentCard } from '#/components/content-card'
import { PageHeader } from '#/components/page-header'
import { tutorials } from '#/lib/tutorials'
import type { TutorialSlug } from '#/lib/tutorials'
import { useTutorialProgress } from '#/lib/tutorials/progress'
import { Check } from 'lucide-react'

export const Route = createFileRoute('/tutorials/')({
  component: TutorialsPage,
})

function TutorialsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6">
      <PageHeader
        title="Tutorials"
        description="Step-by-step guides on the tools and techniques I use."
      />

      {tutorials.length === 0 ? (
        <p className="text-muted-foreground">
          No tutorials published yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tutorials.map((tutorial) => (
            <Link key={tutorial.slug} to={`/tutorials/${tutorial.slug}`}>
              <ContentCard
                badge={tutorial.difficulty}
                readTime={tutorial.readTime}
                extra={<ProgressBadge slug={tutorial.slug} />}
                title={tutorial.title}
                date={tutorial.date}
                excerpt={tutorial.excerpt}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function ProgressBadge({ slug }: { slug: TutorialSlug }) {
  const { visited, total } = useTutorialProgress(`/tutorials/${slug}`)
  if (visited.length === 0 || total === 0) return null
  const done = Math.min(visited.length, total)
  return (
    <span className="flex items-center text-xs text-emerald-600 dark:text-emerald-400">
      <Check className="mr-1 size-3" /> {done}/{total} visited
    </span>
  )
}
