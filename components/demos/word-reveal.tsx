'use client'

import { WordReveal } from '@/components/kidow/word-reveal'

export default function WordRevealDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <WordReveal text="수집" />
    </div>
  )
}
