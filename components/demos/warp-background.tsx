'use client'

import dynamic from 'next/dynamic'

// 원본이 Math.random() 으로 매번 다른 빔을 만들어 SSR 결과와 어긋난다.
// 프리뷰 전용 데모이므로 클라이언트에서만 렌더한다.
const WarpBackground = dynamic(
  () => import('@/components/kidow/warp-background').then((m) => m.WarpBackground),
  { ssr: false }
)

export default function WarpBackgroundDemo() {
  return (
    <WarpBackground className="w-72">
      <div className="bg-background rounded-lg border p-6 text-center text-sm">
        워프 배경 안의 카드
      </div>
    </WarpBackground>
  )
}
