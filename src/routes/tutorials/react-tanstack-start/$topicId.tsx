import { createFileRoute, notFound } from '@tanstack/react-router'
import {
  ReactStartContent,
  reactStartNav,
} from '#/lib/tutorials/reactstart-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(reactStartNav)

export const Route = createFileRoute(
  '/tutorials/react-tanstack-start/$topicId',
)({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — React & TanStack Start | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: ReactStartTopicPage,
})

function ReactStartTopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/react-tanstack-start"
      nav={reactStartNav}
      activeId={topicId}
      eyebrow="React & TanStack Start"
      title="React & TanStack Start — Field Notes"
    >
      <ReactStartContent />
    </TutorialTopicPage>
  )
}
