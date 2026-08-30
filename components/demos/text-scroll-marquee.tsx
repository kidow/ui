'use client'

import TextScrollMarquee from '@/components/kidow/text-scroll-marquee'

export default function TextScrollMarqueeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TextScrollMarquee baseVelocity={1}>여러 UI 를 한 곳에</TextScrollMarquee>
    </div>
  )
}
