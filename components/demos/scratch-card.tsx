'use client'

import { ScratchCard } from '@/components/kidow/scratch-card'

export default function ScratchCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScratchCard><div className="flex h-40 w-64 items-center justify-center bg-muted text-sm">긁어 보세요</div></ScratchCard>
    </div>
  )
}
