'use client'

import StatsCounter from '@/components/kidow/stats-counter'

export default function StatsCounterDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <StatsCounter value={324} suffix="개" />
    </div>
  )
}
