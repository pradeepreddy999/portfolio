import { createFileRoute } from '@tanstack/react-router'
import {
  StorybookContent,
  storybookNav,
} from '#/lib/tutorials/storybook-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/react-storybook/$topicId')(
  topicRouteOptions({
    slug: 'react-storybook',
    nav: storybookNav,
    Content: StorybookContent,
    eyebrow: 'React Storybook',
    title: 'React Storybook — Basics to Advanced',
    headTitle: 'React Storybook',
  }),
)
