'use client'

import SwapTextCard from '@/components/kidow/swap-text-card'

export default function SwapTextCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SwapTextCard initialText="수집" finalText="수집" />
    </div>
  )
}
