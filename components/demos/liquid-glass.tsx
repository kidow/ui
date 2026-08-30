'use client'

import { LiquidGlassCard } from '@/components/kidow/liquid-glass'

export default function LiquidGlassDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LiquidGlassCard><div className="p-6 text-sm">유리 표면</div></LiquidGlassCard>
    </div>
  )
}
