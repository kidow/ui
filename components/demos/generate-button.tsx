'use client'

import GenerateButton from '@/components/kidow/generate-button'

export default function GenerateButtonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <GenerateButton isGenerating={false} />
    </div>
  )
}
