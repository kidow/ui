'use client'

import SlidingLogoMarquee from '@/components/kidow/sliding-logo-marquee'

export default function SlidingLogoMarqueeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SlidingLogoMarquee items={[{ id: '수집', content: '수집' }, { id: '정규화', content: '정규화' }, { id: '출처', content: '출처' }]} />
    </div>
  )
}
