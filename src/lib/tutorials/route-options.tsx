import { getTutorial } from '#/lib/tutorials'
import type { TutorialSlug } from '#/lib/tutorials'
import type { NavGroup } from '#/lib/tutorials/shared'
import {
  TutorialOverview,
  TutorialTopicPage,
  flattenTopics,
} from '#/lib/tutorials/shared'
import { orNotFound } from '#/lib/utils'
import { useParams } from '@tanstack/react-router'
import type { ComponentType } from 'react'

interface TutorialRouteConfig {
  slug: TutorialSlug
  nav: Array<NavGroup>
  eyebrow: string
}

export function topicRouteOptions({
  slug,
  nav,
  eyebrow,
  title,
  headTitle,
  Content,
}: TutorialRouteConfig & {
  title: string
  headTitle: string
  Content: ComponentType
}) {
  const basePath = `/tutorials/${slug}` as const
  const flatTopics = flattenTopics(nav)

  return {
    loader: ({ params }: { params: { topicId: string } }) =>
      orNotFound(flatTopics.find((t) => t.id === params.topicId)),
    head: ({ loaderData }: { loaderData?: { label: string } }) => ({
      meta: [
        {
          title: loaderData
            ? `${loaderData.label} — ${headTitle} | Tutorials`
            : 'Tutorials',
        },
      ],
    }),
    component: function TopicPage() {
      const { topicId } = useParams({ strict: false })

      return (
        <TutorialTopicPage
          basePath={basePath}
          nav={nav}
          activeId={topicId ?? ''}
          eyebrow={eyebrow}
          title={title}
        >
          <Content />
        </TutorialTopicPage>
      )
    },
  }
}

export function overviewRouteOptions({
  slug,
  nav,
  eyebrow,
  headTitle,
  description,
}: TutorialRouteConfig & { headTitle: string; description: string }) {
  const basePath = `/tutorials/${slug}` as const

  return {
    head: () => ({
      meta: [
        { title: `${headTitle} | Tutorials` },
        { name: 'description', content: description },
      ],
    }),
    component: function OverviewPage() {
      const tutorial = getTutorial(slug)!

      return (
        <TutorialOverview
          basePath={basePath}
          nav={nav}
          eyebrow={eyebrow}
          title={tutorial.title}
          description={tutorial.excerpt}
          date={tutorial.date}
          readTime={tutorial.readTime}
          difficulty={tutorial.difficulty}
          stack={tutorial.stack}
        />
      )
    },
  }
}
