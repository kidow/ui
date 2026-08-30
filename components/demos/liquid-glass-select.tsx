'use client'

import LiquidGlassSelect from '@/components/kidow/liquid-glass-select'

export default function LiquidGlassSelectDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LiquidGlassSelect options={[{ label: "전체", value: "all" }, { label: "버튼", value: "buttons" }]} />
    </div>
  )
}
