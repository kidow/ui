'use client'

import dynamic from 'next/dynamic'

// 원본이 Math.random() 으로 조각별 지연을 만들어 SSR 결과와 어긋난다.
// 프리뷰에서만 쓰는 데모이므로 클라이언트에서만 렌더한다.
const PixelImage = dynamic(
  () => import('@/components/kidow/pixel-image').then((m) => m.PixelImage),
  { ssr: false }
)

export default function PixelImageDemo() {
  return <PixelImage src="/demo-image.svg" grid="6x4" grayscaleAnimation />
}
