'use client'

import { GridBackground } from '@/components/kidow/grid-dot-backgrounds'

export default function GridDotBackgroundsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <GridBackground className="h-40 w-full rounded-xl" gridSize={24}>
        <span className="text-sm">격자 배경</span>
      </GridBackground>
    </div>
  )
}
