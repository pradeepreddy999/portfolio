import { createFileRoute } from '@tanstack/react-router'
import { WebApiContent, webApiNav } from '#/lib/tutorials/webapi-content'
import { topicRouteOptions } from '#/lib/tutorials/route-options'

export const Route = createFileRoute('/tutorials/dotnet-web-api/$topicId')(
  topicRouteOptions({
    slug: 'dotnet-web-api',
    nav: webApiNav,
    Content: WebApiContent,
    eyebrow: '.NET 10 Web API Field Guide',
    title: '.NET 10 Web API — Basics → Advanced',
    headTitle: '.NET 10 Web API Field Guide',
  }),
)
