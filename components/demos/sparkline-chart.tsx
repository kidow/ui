'use client'

import { DefaultSparkline } from '@/components/kidow/sparkline-chart/sparkline-chart'

export default function SparklineChartDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DefaultSparkline />
    </div>
  )
}
