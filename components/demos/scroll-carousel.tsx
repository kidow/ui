'use client'

import { BadgeCheck, Boxes, Wand2 } from 'lucide-react'

import { ScrollCarousel } from '@/components/kidow/scroll-carousel'

export default function ScrollCarouselDemo() {
  return (
    <div className="w-full p-4">
      <ScrollCarousel
        features={[
          { icon: Boxes, title: '수집', description: '문서 URL 하나로 시작합니다.', image: '/demo-1.svg' },
          { icon: Wand2, title: '정규화', description: 'import 와 토큰만 손봅니다.', image: '/demo-2.svg' },
          { icon: BadgeCheck, title: '출처', description: '라이선스까지 기록합니다.', image: '/demo-3.svg' },
        ]}
      />
    </div>
  )
}
