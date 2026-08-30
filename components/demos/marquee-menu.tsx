'use client'

import MarqueeMenu from '@/components/kidow/marquee-menu'

export default function MarqueeMenuDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <MarqueeMenu items={[{ name: '수집', src: '수집' }, { name: '정규화', src: '정규화' }, { name: '출처', src: '출처' }]} />
    </div>
  )
}
