'use client'

import { GlowEffect } from '@/components/kidow/glow-effect'

export default function GlowEffectDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <div className="relative"><GlowEffect colors={["#0894FF","#C959DD","#FF2E54"]} mode="colorShift" blur="soft" /><div className="bg-background relative rounded-lg border px-6 py-3 text-sm">발광 효과</div></div>
    </div>
  )
}
