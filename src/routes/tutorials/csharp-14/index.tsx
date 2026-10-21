import { createFileRoute } from '@tanstack/react-router'
import { csharp14Nav } from '#/lib/tutorials/csharp14-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/csharp-14/')(
  overviewRouteOptions({
    slug: 'csharp-14',
    nav: csharp14Nav,
    eyebrow: 'C# Tutorial',
    headTitle: 'C# — Basics to Advanced (C# 14 / .NET 10)',
    description:
      'A full self-paced roadmap from C# fundamentals through async, memory, and the new language features shipping in C# 14 with .NET 10.',
  }),
)
