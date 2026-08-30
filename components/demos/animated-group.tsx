'use client'

import { AnimatedGroup } from '@/components/kidow/animated-group'

export default function AnimatedGroupDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <AnimatedGroup className="grid grid-cols-3 gap-3" preset="scale">{["수집","정규화","출처"].map((t)=>(<div key={t} className="rounded-lg border p-4 text-sm">{t}</div>))}</AnimatedGroup>
    </div>
  )
}
