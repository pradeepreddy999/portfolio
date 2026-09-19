import { createFileRoute, notFound } from '@tanstack/react-router'
import { WebApiContent, webApiNav } from '#/lib/tutorials/webapi-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(webApiNav)

export const Route = createFileRoute('/tutorials/dotnet-web-api/$topicId')({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — .NET 10 Web API Field Guide | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: WebApiTopicPage,
})

function WebApiTopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/dotnet-web-api"
      nav={webApiNav}
      activeId={topicId}
      eyebrow=".NET 10 Web API Field Guide"
      title=".NET 10 Web API — Basics → Advanced"
    >
      <WebApiContent />
    </TutorialTopicPage>
  )
}
