export interface Tutorial {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  stack: Array<string>
  content: string
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
    content: '',
  },
  {
    slug: 'sql-nova-pizza',
    title: 'SQL — Basics to Advanced (Nova Pizza Academy)',
    excerpt:
      'Learn SQL from SELECT to window functions, CTEs, ROLLUP/CUBE, transactions, JSON, indexing, and security — every example queries the same five-table pizza delivery schema so it all clicks together.',
    date: '2026-09-12',
    readTime: '65 min read',
    difficulty: 'Beginner',
    stack: ['SQL', 'PostgreSQL'],
    content: '',
  },
  {
    slug: 'efcore-10',
    title: 'EF Core — Basics to Advanced (Superhero Academy)',
    excerpt:
      'A complete walk from first DbContext to bulk operations, multi-tenancy, and provider internals — every relationship, query, and gotcha taught against one running schema: a superhero academy database.',
    date: '2026-09-15',
    readTime: '65 min read',
    difficulty: 'Intermediate',
    stack: ['C#', 'EF Core 10', '.NET 10'],
    content: '',
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
    content: '',
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
    content: '',
  },
  {
    slug: 'dotnet-web-api',
    title: 'The .NET 10 Web API Field Guide',
    excerpt:
      'Everything a Web API needs, in the order you’ll actually need it — 45 concepts from C# 14 language essentials through Docker, every one of them named against the library you’d reach for in real production code, all built around one running Pizza Ordering API. Targets .NET 10, EF Core 10, and xUnit v3.',
    date: '2026-09-19',
    readTime: '95 min read',
    difficulty: 'Intermediate',
    stack: ['.NET 10', 'C# 14', 'EF Core 10'],
    content: '',
  },
]

export function getTutorial(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}
