'use client'

import { ScrollTo } from '@/components/kidow/scroll-to/components/motion/scroll-to'

export default function ScrollToDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScrollTo to={400}>아래로 이동</ScrollTo>
    </div>
  )
}
