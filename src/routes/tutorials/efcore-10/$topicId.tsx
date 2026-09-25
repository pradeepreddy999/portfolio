import { createFileRoute, notFound } from '@tanstack/react-router'
import { EfCoreContent, efCoreNav } from '#/lib/tutorials/efcore-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(efCoreNav)

export const Route = createFileRoute('/tutorials/efcore-10/$topicId')({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — EF Core Basics to Advanced | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: EfCoreTopicPage,
})

function EfCoreTopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/efcore-10"
      nav={efCoreNav}
      activeId={topicId}
      eyebrow="EF Core · Maple Street Library"
      title="EF Core — Basics → Advanced"
    >
      <EfCoreContent />
    </TutorialTopicPage>
  )
}
