export type TutorialSlug =
  | 'csharp-14'
  | 'sql-nova-pizza'
  | 'efcore-10'
  | 'web-development'
  | 'react-tanstack-start'
  | 'dotnet-web-api'
  | 'react-storybook'

export interface Tutorial {
  slug: TutorialSlug
  title: string
  excerpt: string
  date: string
  readTime: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  stack: Array<string>
}

export const tutorials: Tutorial[] = [
  {
    slug: 'csharp-14',
    title: 'C# — Basics to Advanced (C# 14 / .NET 10)',
    excerpt:
      'A full self-paced roadmap from C# fundamentals through async, memory, and the new language features shipping in C# 14 with .NET 10 — 40 topics, each with the "why," not just the "what."',
    date: '2026-09-12',
    readTime: '65 min read',
    difficulty: 'Intermediate',
    stack: ['C#', '.NET 10'],
  },
  {
    slug: 'sql-nova-pizza',
    title: 'SQL — Basics to Advanced (Maple Street Library)',
    excerpt:
      'Learn SQL from SELECT to window functions, CTEs, ROLLUP/CUBE, transactions, JSON, indexing, and security — every example queries the same small library schema — books, members, and loans — so it all clicks together.',
    date: '2026-09-12',
    readTime: '65 min read',
    difficulty: 'Beginner',
    stack: ['SQL', 'PostgreSQL'],
  },
  {
    slug: 'efcore-10',
    title: 'EF Core — Basics to Advanced (Maple Street Library)',
    excerpt:
      'A complete walk from first DbContext to bulk operations, multi-tenancy, and provider internals — every relationship, query, and gotcha taught against one running schema: a small lending library.',
    date: '2026-09-15',
    readTime: '65 min read',
    difficulty: 'Intermediate',
    stack: ['C#', 'EF Core 10', '.NET 10'],
  },
  {
    slug: 'web-development',
    title: 'Modern Web Development — Fundamentals to Advanced',
    excerpt:
      'A complete self-paced roadmap: how the web actually works, then HTML, CSS, and JavaScript from first principles through the newest browser features — container queries, :has(), signals, Web Components, and more.',
    date: '2026-09-19',
    readTime: '90 min read',
    difficulty: 'Beginner',
    stack: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    slug: 'react-tanstack-start',
    title: 'React & TanStack Start — Field Notes',
    excerpt:
      'A working reference for going from component basics to a fully-routed, server-rendered TanStack Start app — 36 modules covering hooks, React 19, and file-based routing, loaders, server functions, and deployment.',
    date: '2026-09-19',
    readTime: '75 min read',
    difficulty: 'Intermediate',
    stack: ['React 19', 'TanStack Start', 'TypeScript'],
  },
  {
    slug: 'dotnet-web-api',
    title: 'The .NET 10 Web API Field Guide',
    excerpt:
      'Everything a Web API needs, in the order you’ll actually need it — 45 concepts from C# 14 language essentials through Docker, every one of them named against the library you’d reach for in real production code, all built around one running Library API (Maple Street Library). Targets .NET 10, EF Core 10, and xUnit v3.',
    date: '2026-09-19',
    readTime: '95 min read',
    difficulty: 'Intermediate',
    stack: ['.NET 10', 'C# 14', 'EF Core 10'],
  },
  {
    slug: 'react-storybook',
    title: 'React Storybook — Basics to Advanced, with Testing',
    excerpt:
      'Build, document, and test components in isolation — 36 topics from your first CSF story through decorators, MSW and module mocking, then a full testing track: play functions, the Vitest addon, accessibility, portable stories, visual regression, coverage, and CI. Every example builds on the same Maple Street Library app used across these tutorials.',
    date: '2026-09-25',
    readTime: '80 min read',
    difficulty: 'Intermediate',
    stack: ['Storybook 10', 'React 19', 'Vitest'],
  },
]

export function getTutorial(slug: TutorialSlug) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}
