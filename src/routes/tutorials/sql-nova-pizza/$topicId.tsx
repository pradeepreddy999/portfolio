import { createFileRoute, notFound } from '@tanstack/react-router'
import { SqlContent, sqlNovaPizzaNav } from '#/lib/tutorials/sql-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(sqlNovaPizzaNav)

export const Route = createFileRoute('/tutorials/sql-nova-pizza/$topicId')({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — SQL Basics to Advanced | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: SqlNovaPizzaTopicPage,
})

function SqlNovaPizzaTopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/sql-nova-pizza"
      nav={sqlNovaPizzaNav}
      activeId={topicId}
      eyebrow="SQL · Maple Street Library"
      title="SQL — Basics → Advanced"
    >
      <SqlContent />
    </TutorialTopicPage>
  )
}
