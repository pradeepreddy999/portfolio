import { createFileRoute } from '@tanstack/react-router'
import { reactStartNav } from '#/lib/tutorials/reactstart-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/react-tanstack-start/')(
  overviewRouteOptions({
    slug: 'react-tanstack-start',
    nav: reactStartNav,
    eyebrow: 'React & TanStack Start',
    headTitle: 'React & TanStack Start — Field Notes',
    description:
      'A working reference for going from component basics to a fully-routed, server-rendered TanStack Start app — 36 modules with runnable code.',
  }),
)
