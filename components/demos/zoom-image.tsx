'use client'

import ZoomImage from '@/components/kidow/zoom-image'

export default function ZoomImageDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ZoomImage zoom="zoomIn" src="/demo-1.svg" alt="미리보기" className="size-40 object-cover" />
    </div>
  )
}
