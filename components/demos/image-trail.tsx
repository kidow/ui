'use client'

import { ImageTrail } from '@/components/kidow/image-trail'

const images = ['/demo-1.svg', '/demo-2.svg', '/demo-3.svg', '/demo-4.svg']

export default function ImageTrailDemo() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-lg border">
      <ImageTrail images={images} />
      <span className="text-muted-foreground pointer-events-none absolute inset-0 flex items-center justify-center text-xs">
        마우스를 움직여 보세요
      </span>
    </div>
  )
}
