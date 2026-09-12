import { createFileRoute } from '@tanstack/react-router'
import { sqlNovaPizzaNav } from '#/lib/tutorials/sql-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/sql-nova-pizza/')({
  head: () => ({
    meta: [
      { title: 'SQL — Basics to Advanced (Nova Pizza Academy) | Tutorials' },
      {
        name: 'description',
        content:
          'Learn SQL from SELECT to window functions, CTEs, and indexing — every example queries the same five-table pizza delivery schema so it all clicks together.',
      },
    ],
  }),
  component: SqlNovaPizzaOverviewPage,
})

function SqlNovaPizzaOverviewPage() {
  const tutorial = getTutorial('sql-nova-pizza')!

  return (
    <TutorialOverview
      basePath="/tutorials/sql-nova-pizza"
      nav={sqlNovaPizzaNav}
      eyebrow="Nova Pizza SQL Academy"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
