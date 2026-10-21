import { createFileRoute } from '@tanstack/react-router'
import { storybookNav } from '#/lib/tutorials/storybook-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/react-storybook/')(
  overviewRouteOptions({
    slug: 'react-storybook',
    nav: storybookNav,
    eyebrow: 'React Storybook',
    headTitle: 'React Storybook — Basics to Advanced, with Testing',
    description:
      'Learn Storybook for React from your first story to interaction, accessibility, visual, and coverage testing with Vitest — 36 topics built around one small library app.',
  }),
)
