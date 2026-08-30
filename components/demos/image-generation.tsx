'use client'

import { ImageGeneration } from '@/components/kidow/image-generation/components/agents/image-generation'

export default function ImageGenerationDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ImageGeneration />
    </div>
  )
}
