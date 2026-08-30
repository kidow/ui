'use client'

import SlidingCards from '@/components/kidow/sliding-cards'

export default function SlidingCardsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SlidingCards cards={[{ id: '수집' }, { id: '정규화' }, { id: '출처' }]} />
    </div>
  )
}
