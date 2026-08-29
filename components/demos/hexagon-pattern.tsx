'use client'

import dynamic from 'next/dynamic'

// 원본이 Math.random() 으로 매번 다른 값을 만들어 SSR 결과와 어긋난다.
// 프리뷰 전용 데모이므로 클라이언트에서만 렌더한다.
const HexagonPattern = dynamic(
  () => import('@/components/kidow/hexagon-pattern').then((m) => m.HexagonPattern),
  { ssr: false }
)

export default function HexagonPatternDemo() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg border">
      <HexagonPattern />
    </div>
  )
}
