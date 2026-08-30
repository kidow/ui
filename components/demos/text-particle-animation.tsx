'use client'

import TextParticleAnimation from '@/components/kidow/text-particle-animation'

export default function TextParticleAnimationDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TextParticleAnimation text={"여러 UI 를 한 곳에"} />
    </div>
  )
}
