'use client'

import SmoothScroll from '@/components/kidow/smooth-scroll'

export default function SmoothScrollDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <SmoothScroll>
        <p className="text-sm">스크롤을 부드럽게 만듭니다</p>
      </SmoothScroll>
    </div>
  )
}
