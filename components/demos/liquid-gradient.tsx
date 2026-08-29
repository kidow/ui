'use client'

import { Liquid } from '@/components/kidow/liquid-gradient'

export default function LiquidGradientDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <div className="relative size-40 overflow-hidden rounded-xl">
        <Liquid isHovered colors={{ color1: '#7c3aed', color2: '#ec4899', color3: '#f59e0b', color4: '#0ea5e9', color5: '#22c55e', color6: '#7c3aed', color7: '#ec4899', color8: '#f59e0b', color9: '#0ea5e9', color10: '#22c55e', color11: '#7c3aed', color12: '#ec4899', color13: '#f59e0b', color14: '#0ea5e9', color15: '#22c55e', color16: '#7c3aed', color17: '#ec4899' }} />
      </div>
    </div>
  )
}
