import { createFileRoute } from '@tanstack/react-router'
import { WebDevContent, webDevNav } from '#/lib/tutorials/webdev-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/web-development/$topicId')(
  topicRouteOptions({
    slug: 'web-development',
    nav: webDevNav,
    Content: WebDevContent,
    eyebrow: 'Web Dev Roadmap',
    title: 'Web Development — Basics → Advanced',
    headTitle: 'Modern Web Development',
  }),
)
