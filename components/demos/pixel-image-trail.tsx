'use client'

import { PixelImageTrail } from '@/components/kidow/pixel-image-trail'

export default function PixelImageTrailDemo() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg border">
      <PixelImageTrail src="/demo-3.svg" alt="픽셀 트레일 예시" />
    </div>
  )
}
