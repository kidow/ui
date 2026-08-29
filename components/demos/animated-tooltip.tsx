'use client'

import AnimatedTooltip from '@/components/kidow/animated-tooltip'

export default function AnimatedTooltipDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <AnimatedTooltip content="설치 명령을 복사합니다">
        <button className="rounded-lg border px-4 py-2 text-sm">hover</button>
      </AnimatedTooltip>
    </div>
  )
}
