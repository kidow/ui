'use client'

import { PointsChart } from '@/components/kidow/points-chart'

export default function PointsChartDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <PointsChart data={[{ date: '수집', total: 1, change: 1 }, { date: '정규화', total: 2, change: 2 }, { date: '출처', total: 3, change: 3 }]} />
    </div>
  )
}
