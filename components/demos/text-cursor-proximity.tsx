'use client'

import { useRef } from 'react'

import TextCursorProximity from '@/components/kidow/text-cursor-proximity'

export default function TextCursorProximityDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex min-h-40 w-full items-center justify-center p-4 text-2xl font-semibold">
      <TextCursorProximity containerRef={containerRef} styles={{ transform: { from: 'scale(1)', to: 'scale(1.3)' } }}>커서를 가까이 대 보세요</TextCursorProximity>
    </div>
  )
}
