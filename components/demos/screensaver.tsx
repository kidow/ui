'use client'

import { useRef } from 'react'

import Screensaver from '@/components/kidow/screensaver'

export default function ScreensaverDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="flex min-h-40 w-full items-center justify-center p-4 text-2xl font-semibold">
      <Screensaver containerRef={containerRef}>kidow/ui</Screensaver>
    </div>
  )
}
