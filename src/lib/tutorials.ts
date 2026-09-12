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
      'A full self-paced roadmap from C# fundamentals through async, memory, and the new language features shipping in C# 14 with .NET 10.',
    date: '2026-09-12',
    readTime: '45 min read',
    difficulty: 'Intermediate',
    stack: ['C#', '.NET 10'],
    content: '',
  },
  {
    slug: 'sql-nova-pizza',
    title: 'SQL — Basics to Advanced (Nova Pizza Academy)',
    excerpt:
      'Learn SQL from SELECT to views, window functions, CTEs, ROLLUP/CUBE, indexing, and stored procedures — every example queries the same five-table pizza delivery schema so it all clicks together.',
    date: '2026-09-12',
    readTime: '50 min read',
    difficulty: 'Beginner',
    stack: ['SQL', 'PostgreSQL'],
    content: '',
  },
]

export function getTutorial(slug: string) {
  return tutorials.find((tutorial) => tutorial.slug === slug)
}
