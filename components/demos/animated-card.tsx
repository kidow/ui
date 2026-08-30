'use client'

import AnimatedCard from '@/components/kidow/animated-card/animatedcard'

export default function AnimatedCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <AnimatedCard imgSrc="/demo-1.svg" title="kidow/ui" aboutProduct="여러 UI 를 한 곳에" />
    </div>
  )
}
