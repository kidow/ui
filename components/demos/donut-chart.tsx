'use client'

import DonutChart from '@/components/kidow/donut-chart'

export default function DonutChartDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DonutChart size={1} progress={1} />
    </div>
  )
}
