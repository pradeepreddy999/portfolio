import { Button } from '#/components/ui/button'
import {
  markVisited,
  resetProgress,
  useTutorialProgress,
} from '#/lib/tutorials/progress'
import type { TutorialSlug } from '#/lib/tutorials'
import { cn } from '#/lib/utils'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Calendar, Check, Clock } from 'lucide-react'
import * as React from 'react'

export interface NavItem {
  id: string
  label: string
}
export interface NavGroup {
  title: string
  items: Array<NavItem>
}

export type TutorialBasePath = `/tutorials/${TutorialSlug}`

function topicRoute(basePath: TutorialBasePath) {
  return `${basePath}/$topicId`
}

export function flattenTopics(nav: Array<NavGroup>) {
  return nav.flatMap((group) =>
    group.items.map((item) => ({ ...item, groupTitle: group.title })),
  )
}

const TopicFilterContext = React.createContext<string | null>(null)

function findGroupIndex(nav: Array<NavGroup>, activeId: string) {
  return nav.findIndex((group) =>
    group.items.some((item) => item.id === activeId),
  )
}

export function TutorialSidebar({
  nav,
  activeId,
  basePath,
  eyebrow,
  title,
}: {
  nav: Array<NavGroup>
  activeId: string
  basePath: TutorialBasePath
  eyebrow: string
  title: string
}) {
  const { visited } = useTutorialProgress(basePath)
  const visitedSet = new Set(visited)
  const [openGroups, setOpenGroups] = React.useState<Set<number>>(() => {
    const idx = findGroupIndex(nav, activeId)
    return new Set(idx >= 0 ? [idx] : [0])
  })

  React.useEffect(() => {
    const idx = findGroupIndex(nav, activeId)
    if (idx < 0) return
    setOpenGroups((prev) => (prev.has(idx) ? prev : new Set(prev).add(idx)))
  }, [activeId, nav])

  return (
    <nav className="md:sticky md:top-22 md:h-[calc(100vh-3.5rem-4rem)] md:w-64 md:shrink-0 md:overflow-y-auto">
      <div className="mb-4 border-b border-border pb-4">
        <Link
          to={basePath}
          className="text-xs tracking-wide text-primary hover:underline"
        >
          {eyebrow}
        </Link>
        <div className="mt-1 text-lg font-semibold">{title}</div>
      </div>

      {nav.map((group, i) => (
        <details
          key={group.title}
          open={openGroups.has(i)}
          onToggle={(e) => {
            const isOpen = (e.target as HTMLDetailsElement).open
            setOpenGroups((prev) => {
              const next = new Set(prev)
              if (isOpen) next.add(i)
              else next.delete(i)
              return next
            })
          }}
          className="mb-1"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-2 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground">
            <span>{group.title}</span>
            <GroupCount
              done={
                group.items.filter((item) => visitedSet.has(item.id)).length
              }
              total={group.items.length}
            />
          </summary>
          <ul className="pb-2 pl-3">
            {group.items.map((item) => {
              const isVisited = visitedSet.has(item.id)
              return (
                <li key={item.id}>
                  <Link
                    to={topicRoute(basePath)}
                    params={{ topicId: item.id }}
                    className={cn(
                      'flex items-center gap-2 border-l-2 py-1.5 pr-2 pl-3 text-sm transition-colors',
                      activeId === item.id
                        ? 'border-primary text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="min-w-0 flex-1">{item.label}</span>
                    {isVisited && <VisitedMark />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </details>
      ))}
    </nav>
  )
}

function VisitedMark() {
  return (
    <>
      <Check
        aria-hidden
        className="size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
      />
      <span className="sr-only">(visited)</span>
    </>
  )
}

function GroupCount({ done, total }: { done: number; total: number }) {
  if (done === 0) return null
  return (
    <span
      className={cn(
        'font-mono text-[11px] font-normal tabular-nums',
        done === total
          ? 'text-emerald-600 dark:text-emerald-400'
          : 'text-muted-foreground',
      )}
    >
      {done}/{total}
    </span>
  )
}

export function TopicNavFooter({
  basePath,
  prev,
  next,
}: {
  basePath: TutorialBasePath
  prev?: NavItem
  next?: NavItem
}) {
  return (
    <div className="mt-12 flex items-stretch justify-between gap-4 border-t border-border pt-6">
      {prev ? (
        <Link
          to={topicRoute(basePath)}
          params={{ topicId: prev.id }}
          className="group flex max-w-[48%] items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm transition-colors hover:border-primary"
        >
          <ArrowLeft className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">
              Previous
            </span>
            <span className="block truncate font-medium text-foreground">
              {prev.label}
            </span>
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          to={topicRoute(basePath)}
          params={{ topicId: next.id }}
          className="group ml-auto flex max-w-[48%] items-center gap-2 rounded-lg border border-border px-4 py-3 text-right text-sm transition-colors hover:border-primary"
        >
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">Next</span>
            <span className="block truncate font-medium text-foreground">
              {next.label}
            </span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}

export function TutorialTopicPage({
  basePath,
  nav,
  activeId,
  eyebrow,
  title,
  children,
}: {
  basePath: TutorialBasePath
  nav: Array<NavGroup>
  activeId: string
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  const flat = flattenTopics(nav)
  const idx = flat.findIndex((t) => t.id === activeId)
  const prev = idx > 0 ? flat[idx - 1] : undefined
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined
  const groupTitle = flat[idx]?.groupTitle
  const total = flat.length

  React.useEffect(() => {
    if (idx >= 0) markVisited(basePath, activeId, total)
  }, [basePath, activeId, idx, total])

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:px-6 md:py-12">
      <TutorialSidebar
        nav={nav}
        activeId={activeId}
        basePath={basePath}
        eyebrow={eyebrow}
        title={title}
      />

      <main className="min-w-0 flex-1">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            to={basePath}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 size-4" /> Overview
          </Link>
          <Link
            to="/tutorials"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            All tutorials
          </Link>
        </div>

        {groupTitle && (
          <div className="mb-2 text-xs font-semibold tracking-wide text-primary uppercase">
            {groupTitle}
          </div>
        )}

        <TopicFilterContext.Provider value={activeId}>
          {children}
        </TopicFilterContext.Provider>

        <TopicNavFooter basePath={basePath} prev={prev} next={next} />
      </main>
    </div>
  )
}

export function TutorialOverview({
  basePath,
  nav,
  eyebrow,
  title,
  description,
  date,
  readTime,
  difficulty,
  stack,
}: {
  basePath: TutorialBasePath
  nav: Array<NavGroup>
  eyebrow: string
  title: string
  description: string
  date: string
  readTime: string
  difficulty: string
  stack: Array<string>
}) {
  const flat = flattenTopics(nav)
  const topicNumbers = new Map(flat.map((item, i) => [item.id, i + 1]))
  const { visited } = useTutorialProgress(basePath)
  const visitedSet = new Set(visited)
  const doneCount = flat.filter((item) => visitedSet.has(item.id)).length
  const hasProgress = doneCount > 0
  const nextUnvisited = flat.find((item) => !visitedSet.has(item.id))
  const target = nextUnvisited ?? flat[0]
  const ctaLabel = !hasProgress
    ? 'Start tutorial'
    : nextUnvisited
      ? `Continue: ${nextUnvisited.label}`
      : 'Review from the start'

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6">
      <Link
        to="/tutorials"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-2 size-4" /> Back to Tutorials
      </Link>

      <div className="mb-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
        <span className="rounded-md bg-secondary px-2 py-1 text-secondary-foreground">
          {difficulty}
        </span>
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary px-2 py-1 text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-2 text-sm text-primary">{eyebrow}</div>
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-[62ch] text-muted-foreground">{description}</p>

      <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center">
          <Calendar className="mr-2 size-4" />
          {date}
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 size-4" />
          {readTime}
        </div>
      </div>

      {hasProgress && (
        <div className="mt-6 max-w-md">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              <span className="font-medium text-foreground">{doneCount}</span>{' '}
              of {flat.length} topics visited
            </span>
            <button
              type="button"
              onClick={() => resetProgress(basePath)}
              className="text-xs text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Reset progress
            </button>
          </div>
          <div
            role="progressbar"
            aria-label="Tutorial progress"
            aria-valuemin={0}
            aria-valuemax={flat.length}
            aria-valuenow={doneCount}
            className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
          >
            <div
              className="h-full rounded-full bg-emerald-500 transition-[width]"
              style={{ width: `${(doneCount / flat.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      <Link
        to={topicRoute(basePath)}
        params={{ topicId: target.id }}
        className="mt-8 inline-block max-w-full"
      >
        <Button size="lg" className="max-w-full">
          <span className="truncate">{ctaLabel}</span>
          <ArrowRight className="ml-2 size-4 shrink-0" />
        </Button>
      </Link>

      <div className="mt-14 space-y-9 border-t border-border pt-10">
        {nav.map((group, groupIndex) => (
          <section key={group.title}>
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-sm text-primary">
                {String(groupIndex + 1).padStart(2, '0')}
              </span>
              <h2 className="text-base font-semibold text-foreground">
                {group.title}
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={topicRoute(basePath)}
                    params={{ topicId: item.id }}
                    className="group flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors hover:bg-muted"
                  >
                    {visitedSet.has(item.id) ? (
                      <span className="flex w-[2ch] justify-center">
                        <VisitedMark />
                      </span>
                    ) : (
                      <span className="font-mono text-xs tabular-nums text-muted-foreground">
                        {String(topicNumbers.get(item.id)).padStart(2, '0')}
                      </span>
                    )}
                    <span className="text-foreground transition-colors group-hover:text-primary">
                      {item.label}
                    </span>
                    <ArrowRight className="ml-auto size-3.5 shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export function Code({ html }: { html: string }) {
  return (
    <pre className="tut-code my-4 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-[13px] leading-relaxed">
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
}

export function Callout({
  variant = 'default',
  children,
}: {
  variant?: 'default' | 'new' | 'warn'
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'my-4 rounded-r-md border-l-4 bg-muted/50 p-4 text-[0.92rem]',
        variant === 'new' && 'border-l-emerald-500',
        variant === 'warn' && 'border-l-amber-500',
        variant === 'default' && 'border-l-primary',
      )}
    >
      {children}
    </div>
  )
}

export function Deepdive({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-r-md border-l-4 border-l-orange-500 bg-orange-500/10 p-4 text-[0.92rem]">
      {children}
    </div>
  )
}

export function RefTable({
  caption,
  headers,
  rows,
}: {
  caption?: React.ReactNode
  headers: Array<string>
  rows: Array<Array<React.ReactNode>>
}) {
  return (
    <div className="my-4 overflow-x-auto">
      {caption && (
        <div className="mb-1 font-mono text-xs text-muted-foreground">
          {caption}
        </div>
      )}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="border border-border bg-muted p-2 text-left font-medium text-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-border p-2 align-top text-muted-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ModuleTitle({ children }: { children: React.ReactNode }) {
  const activeId = React.useContext(TopicFilterContext)
  if (activeId !== null) return null

  return (
    <h3 className="mt-20 mb-2 border-b border-border pb-3 text-base font-semibold text-emerald-600 first:mt-0 dark:text-emerald-400">
      {children}
    </h3>
  )
}

export function Topic({
  id,
  no,
  title,
  children,
}: {
  id: string
  no: string
  title: React.ReactNode
  children: React.ReactNode
}) {
  const activeId = React.useContext(TopicFilterContext)
  if (activeId !== null && activeId !== id) return null

  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="flex items-baseline gap-2 text-2xl font-semibold tracking-tight">
        <span className="font-mono text-sm text-primary">{no}</span>
        {title}
      </h2>
      <div
        className={cn(
          'mt-2 space-y-3 text-[15px] leading-relaxed text-muted-foreground',
          '[&_h4]:mt-6 [&_h4]:mb-1 [&_h4]:text-[0.95rem] [&_h4]:font-semibold [&_h4]:text-emerald-600 dark:[&_h4]:text-emerald-400',
          '[&_strong]:font-semibold [&_strong]:text-foreground',
          '[&_em]:italic',
          '[&_code]:rounded [&_code]:border [&_code]:border-border [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-emerald-700 dark:[&_code]:text-emerald-400',
          '[&_pre_code]:rounded-none [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[13px] [&_pre_code]:text-inherit [&_pre_code]:font-normal',
          '[&_ul]:list-disc [&_ul]:pl-5 [&_li]:my-1',
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function Exercise({
  id,
  prompt,
  children,
}: {
  id: string
  prompt: React.ReactNode
  children: React.ReactNode
}) {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <div className="my-6 rounded-lg border border-dashed border-border p-4">
      <div className="text-xs font-semibold text-primary">Try it</div>
      <p className="mt-2 mb-0">{prompt}</p>
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-expanded={revealed}
        aria-controls={id}
        className="mt-2 rounded-md border border-border px-3 py-1.5 text-sm text-emerald-700 transition-colors hover:border-emerald-500 dark:text-emerald-400"
      >
        {revealed ? 'Hide answer' : 'Reveal answer'}
      </button>
      {revealed && (
        <div id={id} className="mt-3">
          {children}
        </div>
      )}
    </div>
  )
}
