import { createFileRoute, notFound } from '@tanstack/react-router'
import { Csharp14Content, csharp14Nav } from '#/lib/tutorials/csharp14-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(csharp14Nav)

export const Route = createFileRoute('/tutorials/csharp-14/$topicId')({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — C# Basics to Advanced | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: Csharp14TopicPage,
})

function Csharp14TopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/csharp-14"
      nav={csharp14Nav}
      activeId={topicId}
      eyebrow="C# Tutorial"
      title="C# — Basics → Advanced"
    >
      <Csharp14Content />
    </TutorialTopicPage>
  )
}
