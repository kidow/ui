'use client'

import ScrollTextMarquee from '@/components/kidow/scroll-text-marquee'

export default function ScrollTextMarqueeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScrollTextMarquee baseVelocity={3}>한 곳에 모았습니다  </ScrollTextMarquee>
    </div>
  )
}
