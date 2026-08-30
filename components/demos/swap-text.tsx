'use client'

import SwapText from '@/components/kidow/swap-text'

export default function SwapTextDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SwapText initialText="수집" finalText="수집" />
    </div>
  )
}
