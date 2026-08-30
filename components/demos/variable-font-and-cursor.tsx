'use client'

import { useRef } from 'react'

import VariableFontAndCursor from '@/components/kidow/variable-font-and-cursor'

export default function VariableFontAndCursorDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex min-h-40 w-full items-center justify-center p-4 text-2xl font-semibold">
      <VariableFontAndCursor containerRef={containerRef} fontVariationMapping={{ x: { name: 'wght', min: 100, max: 900 }, y: { name: 'slnt', min: 0, max: -10 } }}>가변 폰트</VariableFontAndCursor>
    </div>
  )
}
