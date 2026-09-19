import { createFileRoute, notFound } from '@tanstack/react-router'
import { WebDevContent, webDevNav } from '#/lib/tutorials/webdev-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(webDevNav)

export const Route = createFileRoute('/tutorials/web-development/$topicId')({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — Modern Web Development | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: WebDevTopicPage,
})

function WebDevTopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/web-development"
      nav={webDevNav}
      activeId={topicId}
      eyebrow="Web Dev Roadmap"
      title="Web Development — Basics → Advanced"
    >
      <WebDevContent />
    </TutorialTopicPage>
  )
}
