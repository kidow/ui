'use client'

import { SeasonalHoverCards } from '@/components/kidow/seasonal-hover-cards'

export default function SeasonalHoverCardsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SeasonalHoverCards cards={[{ title: '수집', subtitle: '수집', description: '수집', imageSrc: '수집' }, { title: '정규화', subtitle: '정규화', description: '정규화', imageSrc: '정규화' }, { title: '출처', subtitle: '출처', description: '출처', imageSrc: '출처' }]} />
    </div>
  )
}
