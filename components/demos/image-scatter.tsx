'use client'

import { ImageScatter } from '@/components/kidow/image-scatter'

export default function ImageScatterDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <ImageScatter data={[{ heading: '레지스트리', images: ['/demo-1.svg', '/demo-2.svg', '/demo-3.svg', '/demo-4.svg'] }]} />
    </div>
  )
}
