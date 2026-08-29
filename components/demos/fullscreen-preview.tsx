'use client'

import { FullscreenPreview } from '@/components/kidow/fullscreen-preview'

export default function FullscreenPreviewDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <FullscreenPreview>미리보기 내용</FullscreenPreview>
    </div>
  )
}
