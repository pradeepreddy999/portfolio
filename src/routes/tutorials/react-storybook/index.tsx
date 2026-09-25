import { createFileRoute } from '@tanstack/react-router'
import { storybookNav } from '#/lib/tutorials/storybook-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/react-storybook/')({
  head: () => ({
    meta: [
      {
        title: 'React Storybook — Basics to Advanced, with Testing | Tutorials',
      },
      {
        name: 'description',
        content:
          'Learn Storybook for React from your first story to interaction, accessibility, visual, and coverage testing with Vitest — 36 topics built around one small library app.',
      },
    ],
  }),
  component: StorybookOverviewPage,
})

function StorybookOverviewPage() {
  const tutorial = getTutorial('react-storybook')!

  return (
    <TutorialOverview
      basePath="/tutorials/react-storybook"
      nav={storybookNav}
      eyebrow="React Storybook"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
