import { createFileRoute } from '@tanstack/react-router'
import { webDevNav } from '#/lib/tutorials/webdev-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/web-development/')({
  head: () => ({
    meta: [
      {
        title: 'Modern Web Development — Fundamentals to Advanced | Tutorials',
      },
      {
        name: 'description',
        content:
          'A complete self-paced roadmap: how the web actually works, then HTML, CSS, and JavaScript from first principles through the newest browser features.',
      },
    ],
  }),
  component: WebDevOverviewPage,
})

function WebDevOverviewPage() {
  const tutorial = getTutorial('web-development')!

  return (
    <TutorialOverview
      basePath="/tutorials/web-development"
      nav={webDevNav}
      eyebrow="Web Dev Roadmap"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
