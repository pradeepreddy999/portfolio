import * as React from 'react'

export interface TutorialProgress {
  visited: Array<string>
  total: number
}

const EMPTY: TutorialProgress = { visited: [], total: 0 }
const KEY_PREFIX = 'tutorial-progress:'

const listeners = new Set<() => void>()
const snapshotCache = new Map<
  string,
  { raw: string; value: TutorialProgress }
>()

function storageKey(basePath: string) {
  return `${KEY_PREFIX}${basePath}`
}

function readRaw(basePath: string): string | null {
  try {
    return localStorage.getItem(storageKey(basePath))
  } catch {
    return null
  }
}

function parse(raw: string | null): TutorialProgress {
  if (!raw) return EMPTY
  try {
    const data = JSON.parse(raw) as Partial<TutorialProgress>
    const visited = Array.isArray(data.visited)
      ? data.visited.filter((id): id is string => typeof id === 'string')
      : []
    const total = typeof data.total === 'number' ? data.total : 0
    return { visited, total }
  } catch {
    return EMPTY
  }
}

function notify() {
  for (const listener of listeners) listener()
}

export function getProgress(basePath: string): TutorialProgress {
  const raw = readRaw(basePath)
  if (raw === null) return EMPTY
  const cached = snapshotCache.get(basePath)
  if (cached?.raw === raw) return cached.value
  const value = parse(raw)
  snapshotCache.set(basePath, { raw, value })
  return value
}

export function markVisited(basePath: string, topicId: string, total: number) {
  const current = getProgress(basePath)
  if (current.visited.includes(topicId) && current.total === total) return
  const visited = current.visited.includes(topicId)
    ? current.visited
    : [...current.visited, topicId]
  try {
    localStorage.setItem(
      storageKey(basePath),
      JSON.stringify({ visited, total }),
    )
  } catch {
    return
  }
  notify()
}

export function resetProgress(basePath: string) {
  try {
    localStorage.removeItem(storageKey(basePath))
  } catch {
    return
  }
  notify()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || e.key.startsWith(KEY_PREFIX)) listener()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function useTutorialProgress(basePath: string): TutorialProgress {
  return React.useSyncExternalStore(
    subscribe,
    () => getProgress(basePath),
    () => EMPTY,
  )
}
