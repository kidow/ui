'use client'

import LedBoard from '@/components/kidow/led-board'

export default function LedBoardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LedBoard word="수집" />
    </div>
  )
}
