import { createFileRoute } from '@tanstack/react-router'
import { efCoreNav } from '#/lib/tutorials/efcore-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/efcore-10/')(
  overviewRouteOptions({
    slug: 'efcore-10',
    nav: efCoreNav,
    eyebrow: 'EF Core · Maple Street Library',
    headTitle: 'EF Core — Basics to Advanced (Maple Street Library)',
    description:
      'A complete walk from first DbContext to bulk operations, multi-tenancy, and provider internals — every relationship, query, and gotcha taught against one running schema: a small lending library.',
  }),
)
