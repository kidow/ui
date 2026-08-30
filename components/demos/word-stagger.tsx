'use client'

import { WordStagger } from '@/components/kidow/word-stagger'

export default function WordStaggerDemo() {
  return (
    <div className="flex min-h-32 items-center justify-center p-4 text-2xl font-semibold">
      <WordStagger animation="bottom">kidow/ui</WordStagger>
    </div>
  )
}
