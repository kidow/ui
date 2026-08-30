'use client'

import StylishCarousel from '@/components/kidow/stylish-carousel'

export default function StylishCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <StylishCarousel items={[{ src: '수집' }, { src: '정규화' }, { src: '출처' }]} />
    </div>
  )
}
