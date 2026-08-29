'use client'

import DiagonalCarousel from '@/components/kidow/diagonal-carousel'

export default function DiagonalCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <DiagonalCarousel items={[{ src: '/demo-1.svg', title: '수집' }, { src: '/demo-2.svg', title: '정규화' }, { src: '/demo-3.svg', title: '출처' }]} />
    </div>
  )
}
