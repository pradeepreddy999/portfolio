import { createFileRoute } from '@tanstack/react-router'
import { Csharp14Content, csharp14Nav } from '#/lib/tutorials/csharp14-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/csharp-14/$topicId')(
  topicRouteOptions({
    slug: 'csharp-14',
    nav: csharp14Nav,
    Content: Csharp14Content,
    eyebrow: 'C# Tutorial',
    title: 'C# — Basics → Advanced',
    headTitle: 'C# Basics to Advanced',
  }),
)
