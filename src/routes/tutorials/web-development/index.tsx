import { createFileRoute } from '@tanstack/react-router'
import { webDevNav } from '#/lib/tutorials/webdev-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/web-development/')(
  overviewRouteOptions({
    slug: 'web-development',
    nav: webDevNav,
    eyebrow: 'Web Dev Roadmap',
    headTitle: 'Modern Web Development — Fundamentals to Advanced',
    description:
      'A complete self-paced roadmap: how the web actually works, then HTML, CSS, and JavaScript from first principles through the newest browser features.',
  }),
)
