import { createFileRoute } from '@tanstack/react-router'
import { SqlContent, sqlNovaPizzaNav } from '#/lib/tutorials/sql-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/sql-nova-pizza/$topicId')(
  topicRouteOptions({
    slug: 'sql-nova-pizza',
    nav: sqlNovaPizzaNav,
    Content: SqlContent,
    eyebrow: 'SQL · Maple Street Library',
    title: 'SQL — Basics → Advanced',
    headTitle: 'SQL Basics to Advanced',
  }),
)
