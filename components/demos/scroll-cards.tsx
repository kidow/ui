'use client'

import { ScrollCards } from '@/components/kidow/scroll-cards'

export default function ScrollCardsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScrollCards cards={[{ id: 1, image: '수집' }, { id: 2, image: '정규화' }, { id: 3, image: '출처' }]} />
    </div>
  )
}
