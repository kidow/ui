'use client'

import ImagePreview from '@/components/kidow/image-preview'

export default function ImagePreviewDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ImagePreview src="/demo-1.svg" width={320} height={200} />
    </div>
  )
}
