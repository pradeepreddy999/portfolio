import { createFileRoute } from '@tanstack/react-router'
import { webApiNav } from '#/lib/tutorials/webapi-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/dotnet-web-api/')({
  head: () => ({
    meta: [
      {
        title: 'The .NET 10 Web API Field Guide | Tutorials',
      },
      {
        name: 'description',
        content:
          'Everything a Web API needs, in the order you’ll actually need it — 45 concepts built around one running Library API example, targeting .NET 10, EF Core 10, and xUnit v3.',
      },
    ],
  }),
  component: WebApiOverviewPage,
})

function WebApiOverviewPage() {
  const tutorial = getTutorial('dotnet-web-api')!

  return (
    <TutorialOverview
      basePath="/tutorials/dotnet-web-api"
      nav={webApiNav}
      eyebrow=".NET 10 Web API Field Guide"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
