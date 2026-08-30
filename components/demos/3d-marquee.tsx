'use client'

import { ThreeDMarquee } from '@/components/kidow/3d-marquee'

export default function _3dMarqueeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ThreeDMarquee images={[{ src: '수집', alt: '수집' }, { src: '정규화', alt: '정규화' }, { src: '출처', alt: '출처' }]} />
    </div>
  )
}
