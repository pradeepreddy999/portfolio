import { createFileRoute } from '@tanstack/react-router'
import { reactStartNav } from '#/lib/tutorials/reactstart-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/react-tanstack-start/')({
  head: () => ({
    meta: [
      {
        title: 'React & TanStack Start — Field Notes | Tutorials',
      },
      {
        name: 'description',
        content:
          'A working reference for going from component basics to a fully-routed, server-rendered TanStack Start app — 36 modules with runnable code.',
      },
    ],
  }),
  component: ReactStartOverviewPage,
})

function ReactStartOverviewPage() {
  const tutorial = getTutorial('react-tanstack-start')!

  return (
    <TutorialOverview
      basePath="/tutorials/react-tanstack-start"
      nav={reactStartNav}
      eyebrow="React & TanStack Start"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
