'use client'

import BlurryBlob from '@/components/kidow/blurry-blob'

export default function BlurryBlobDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <BlurryBlob firstBlobColor="수집" secondBlobColor="수집" />
    </div>
  )
}
