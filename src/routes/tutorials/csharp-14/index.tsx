import { createFileRoute } from '@tanstack/react-router'
import { csharp14Nav } from '#/lib/tutorials/csharp14-content'
import { getTutorial } from '#/lib/tutorials'
import { TutorialOverview } from '#/lib/tutorials/shared'

export const Route = createFileRoute('/tutorials/csharp-14/')({
  head: () => ({
    meta: [
      { title: 'C# — Basics to Advanced (C# 14 / .NET 10) | Tutorials' },
      {
        name: 'description',
        content:
          'A full self-paced roadmap from C# fundamentals through async, memory, and the new language features shipping in C# 14 with .NET 10.',
      },
    ],
  }),
  component: Csharp14OverviewPage,
})

function Csharp14OverviewPage() {
  const tutorial = getTutorial('csharp-14')!

  return (
    <TutorialOverview
      basePath="/tutorials/csharp-14"
      nav={csharp14Nav}
      eyebrow="C# Tutorial"
      title={tutorial.title}
      description={tutorial.excerpt}
      date={tutorial.date}
      readTime={tutorial.readTime}
      difficulty={tutorial.difficulty}
      stack={tutorial.stack}
    />
  )
}
