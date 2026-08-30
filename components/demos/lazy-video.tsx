'use client'

import { LazyVideo } from '@/components/kidow/lazy-video'

export default function LazyVideoDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LazyVideo src="수집" />
    </div>
  )
}
