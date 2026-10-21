import { createFileRoute } from '@tanstack/react-router'
import { sqlNovaPizzaNav } from '#/lib/tutorials/sql-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/sql-nova-pizza/')(
  overviewRouteOptions({
    slug: 'sql-nova-pizza',
    nav: sqlNovaPizzaNav,
    eyebrow: 'SQL · Maple Street Library',
    headTitle: 'SQL — Basics to Advanced (Maple Street Library)',
    description:
      'Learn SQL from SELECT to window functions, CTEs, and indexing — every example queries the same small library schema — books, members, and loans — so it all clicks together.',
  }),
)
