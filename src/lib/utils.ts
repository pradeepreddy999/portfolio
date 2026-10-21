import { notFound } from '@tanstack/react-router'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Unwraps a lookup result inside a route loader, or throws a 404. */
export function orNotFound<T>(value: T | undefined): T {
  if (value === undefined) throw notFound()
  return value
}
