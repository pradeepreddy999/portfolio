import { createFileRoute, notFound } from '@tanstack/react-router'
import {
  StorybookContent,
  storybookNav,
} from '#/lib/tutorials/storybook-content'
import { TutorialTopicPage, flattenTopics } from '#/lib/tutorials/shared'

const flatTopics = flattenTopics(storybookNav)

export const Route = createFileRoute('/tutorials/react-storybook/$topicId')({
  loader: ({ params }) => {
    const topic = flatTopics.find((t) => t.id === params.topicId)
    if (!topic) throw notFound()
    return topic
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.label} — React Storybook | Tutorials`
          : 'Tutorials',
      },
    ],
  }),
  component: StorybookTopicPage,
})

function StorybookTopicPage() {
  const { topicId } = Route.useParams()

  return (
    <TutorialTopicPage
      basePath="/tutorials/react-storybook"
      nav={storybookNav}
      activeId={topicId}
      eyebrow="React Storybook"
      title="React Storybook — Basics to Advanced"
    >
      <StorybookContent />
    </TutorialTopicPage>
  )
}
