import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** 문자열이 maxLength 를 넘으면 잘라내고 … 을 붙인다. wigggle-ui 위젯이 쓴다. */
export function truncate(text: string, maxLength = 15): string {
  if (typeof text !== 'string') return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength - 3) + '...'
}
