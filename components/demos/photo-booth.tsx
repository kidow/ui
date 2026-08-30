'use client'

import PhotoBooth from '@/components/kidow/photo-booth'

export default function PhotoBoothDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <PhotoBooth collections={['/demo-1.svg', '/demo-2.svg', '/demo-3.svg']} />
    </div>
  )
}
