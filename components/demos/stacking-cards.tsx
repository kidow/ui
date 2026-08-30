'use client'

import StackingCards from '@/components/kidow/stacking-cards'

export default function StackingCardsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <StackingCards totalCards={1} />
    </div>
  )
}
