import { createFileRoute } from '@tanstack/react-router'
import { EfCoreContent, efCoreNav } from '#/lib/tutorials/efcore-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/efcore-10/$topicId')(
  topicRouteOptions({
    slug: 'efcore-10',
    nav: efCoreNav,
    Content: EfCoreContent,
    eyebrow: 'EF Core · Maple Street Library',
    title: 'EF Core — Basics → Advanced',
    headTitle: 'EF Core Basics to Advanced',
  }),
)
