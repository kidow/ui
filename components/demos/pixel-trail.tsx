'use client'

import PixelTrail from '@/components/kidow/pixel-trail'

export default function PixelTrailDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <PixelTrail pixelSize={1} />
    </div>
  )
}
