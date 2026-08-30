'use client'

import { useRef } from 'react'

import ScrollAndSwapText from '@/components/kidow/scroll-and-swap-text'

export default function ScrollAndSwapTextDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex min-h-40 w-full items-center justify-center p-4 text-2xl font-semibold">
      <ScrollAndSwapText containerRef={containerRef}>스크롤하면 바뀝니다</ScrollAndSwapText>
    </div>
  )
}
