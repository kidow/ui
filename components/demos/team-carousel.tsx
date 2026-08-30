'use client'

import TeamCarousel from '@/components/kidow/team-carousel'

export default function TeamCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TeamCarousel members={[{ id: '수집', name: '수집', role: '수집', image: '수집' }, { id: '정규화', name: '정규화', role: '정규화', image: '정규화' }, { id: '출처', name: '출처', role: '출처', image: '출처' }]} />
    </div>
  )
}
