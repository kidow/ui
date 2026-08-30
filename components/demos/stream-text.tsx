'use client'

import { StreamText } from '@/components/kidow/stream-text'

export default function StreamTextDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <StreamText text="수집" />
    </div>
  )
}
