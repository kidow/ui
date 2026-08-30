'use client'

import BoxCarousel from '@/components/kidow/box-carousel'

export default function BoxCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <BoxCarousel items={[{ id: '수집', type: 'image', src: '수집' }, { id: '정규화', type: 'image', src: '정규화' }, { id: '출처', type: 'image', src: '출처' }]} width={1} height={1} />
    </div>
  )
}
