'use client'

import { ScrollAnimation } from '@/components/kidow/scroll-animation'

export default function ScrollAnimationDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScrollAnimation><div className="p-6 text-sm">스크롤하면 나타납니다</div></ScrollAnimation>
    </div>
  )
}
