'use client'

import { useRef } from 'react'

import VariableFontCursorProximity from '@/components/kidow/variable-font-cursor-proximity'

export default function VariableFontCursorProximityDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex min-h-40 w-full items-center justify-center p-4 text-2xl font-semibold">
      <VariableFontCursorProximity containerRef={containerRef} fromFontVariationSettings="'wght' 400" toFontVariationSettings="'wght' 900">커서에 반응하는 굵기</VariableFontCursorProximity>
    </div>
  )
}
