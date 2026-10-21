import { createFileRoute } from '@tanstack/react-router'
import {
  ReactStartContent,
  reactStartNav,
} from '#/lib/tutorials/reactstart-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute(
  '/tutorials/react-tanstack-start/$topicId',
)(
  topicRouteOptions({
    slug: 'react-tanstack-start',
    nav: reactStartNav,
    Content: ReactStartContent,
    eyebrow: 'React & TanStack Start',
    title: 'React & TanStack Start — Field Notes',
    headTitle: 'React & TanStack Start',
  }),
)
