import { createFileRoute } from '@tanstack/react-router'
import { efCoreNav } from '#/lib/tutorials/efcore-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/efcore-10/')({
  head: () => ({
    meta: [
      {
        title:
          'EF Core — Basics to Advanced (Maple Street Library) | Tutorials',
      },
      {
        name: 'description',
        content:
          'A complete walk from first DbContext to bulk operations, multi-tenancy, and provider internals — every relationship, query, and gotcha taught against one running schema: a small lending library.',
      },
    ],
  }),
  component: EfCoreOverviewPage,
})

function EfCoreOverviewPage() {
  const tutorial = getTutorial('efcore-10')!

  return (
    <TutorialOverview
      basePath="/tutorials/efcore-10"
      nav={efCoreNav}
      eyebrow="EF Core · Maple Street Library"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
