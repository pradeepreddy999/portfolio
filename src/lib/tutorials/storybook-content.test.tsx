import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { flattenTopics } from '#/lib/tutorials/shared'
import {
  StorybookContent,
  storybookNav,
} from '#/lib/tutorials/storybook-content'

describe('StorybookContent', () => {
  const topics = flattenTopics(storybookNav)

  it('has unique nav ids', () => {
    const ids = topics.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('renders a section for every nav item, in nav order', () => {
    const { container } = render(<StorybookContent />)
    const sectionIds = Array.from(container.querySelectorAll('section')).map(
      (s) => s.id,
    )

    expect(sectionIds).toEqual(topics.map((t) => t.id))
  })

  it('numbers topics sequentially', () => {
    const { container } = render(<StorybookContent />)
    const numbers = Array.from(
      container.querySelectorAll('section > h2 > span'),
    ).map((span) => span.textContent)

    expect(numbers).toEqual(
      topics.map((_, i) => String(i + 1).padStart(2, '0')),
    )
  })
})
