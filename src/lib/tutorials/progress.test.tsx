import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  getProgress,
  markVisited,
  resetProgress,
  useTutorialProgress,
} from '#/lib/tutorials/progress'

const BASE = '/tutorials/react-storybook'

describe('tutorial progress', () => {
  beforeEach(() => localStorage.clear())
  afterEach(() => vi.restoreAllMocks())

  it('starts empty', () => {
    expect(getProgress(BASE)).toEqual({ visited: [], total: 0 })
  })

  it('records unique visited topics and the total', () => {
    markVisited(BASE, 'what-why', 36)
    markVisited(BASE, 'setup', 36)
    markVisited(BASE, 'what-why', 36)

    expect(getProgress(BASE)).toEqual({
      visited: ['what-why', 'setup'],
      total: 36,
    })
  })

  it('keeps tutorials separate', () => {
    markVisited(BASE, 'setup', 36)
    expect(getProgress('/tutorials/csharp-14').visited).toEqual([])
  })

  it('clears progress on reset', () => {
    markVisited(BASE, 'setup', 36)
    resetProgress(BASE)
    expect(getProgress(BASE).visited).toEqual([])
  })

  it('treats corrupt data as no progress', () => {
    localStorage.setItem(`tutorial-progress:${BASE}`, '{not json')
    expect(getProgress(BASE)).toEqual({ visited: [], total: 0 })
  })

  it('does not throw when storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })

    expect(() => markVisited(BASE, 'setup', 36)).not.toThrow()
    expect(getProgress(BASE).visited).toEqual([])
  })

  it('re-renders subscribers when a topic is visited', () => {
    function Count() {
      const { visited } = useTutorialProgress(BASE)
      return <span>{visited.length} visited</span>
    }

    render(<Count />)
    expect(screen.getByText('0 visited')).toBeTruthy()

    act(() => markVisited(BASE, 'setup', 36))
    expect(screen.getByText('1 visited')).toBeTruthy()

    act(() => resetProgress(BASE))
    expect(screen.getByText('0 visited')).toBeTruthy()
  })
})
