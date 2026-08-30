'use client'

import { ActivityGraph } from '@/components/kidow/activity-graph/activity-graph'

export default function ActivityGraphDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ActivityGraph data={[{ date: '수집', count: 1 }, { date: '정규화', count: 2 }, { date: '출처', count: 3 }]} />
    </div>
  )
}
