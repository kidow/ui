'use client'

import LiquidGlassChart from '@/components/kidow/liquid-glass-chart'

export default function LiquidGlassChartDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LiquidGlassChart data={[{ label: '수집', value: 1 }, { label: '정규화', value: 2 }, { label: '출처', value: 3 }]} />
    </div>
  )
}
