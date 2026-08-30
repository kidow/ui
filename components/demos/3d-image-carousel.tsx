'use client'

import _3dImageCarousel from '@/components/kidow/3d-image-carousel'

export default function _3dImageCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <_3dImageCarousel slides={[{ id: 1, src: '수집', href: '수집' }, { id: 2, src: '정규화', href: '정규화' }, { id: 3, src: '출처', href: '출처' }]} />
    </div>
  )
}
