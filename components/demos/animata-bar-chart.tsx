'use client'

import BarChart from '@/components/kidow/animata-bar-chart'

export default function AnimataBarChartDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <BarChart items={[{ progress: 80, label: '수집' }, { progress: 55, label: '정규화' }, { progress: 35, label: '출처' }]} />
    </div>
  )
}
