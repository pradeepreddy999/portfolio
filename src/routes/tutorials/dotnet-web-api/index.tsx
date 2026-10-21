import { createFileRoute } from '@tanstack/react-router'
import { webApiNav } from '#/lib/tutorials/webapi-content'
import { overviewRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/dotnet-web-api/')(
  overviewRouteOptions({
    slug: 'dotnet-web-api',
    nav: webApiNav,
    eyebrow: '.NET 10 Web API Field Guide',
    headTitle: 'The .NET 10 Web API Field Guide',
    description:
      'Everything a Web API needs, in the order you’ll actually need it — 45 concepts built around one running Library API example, targeting .NET 10, EF Core 10, and xUnit v3.',
  }),
)
