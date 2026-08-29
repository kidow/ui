'use client'

import PerspectiveCarousel from '@/components/kidow/perspective-carousel'

export default function PerspectiveCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <PerspectiveCarousel items={[{ src: '/demo-1.svg', title: '수집' }, { src: '/demo-2.svg', title: '정규화' }, { src: '/demo-3.svg', title: '출처' }]} />
    </div>
  )
}
