'use client'

import { PointsAwards } from '@/components/kidow/points-awards'

export default function PointsAwardsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <PointsAwards
        awards={[
          { id: '1', awarded: 50, date: '2026-08-20T10:00:00Z', total: 1250, trigger: { id: 't1', type: 'metric', points: 50, metricName: '수집' } },
          { id: '2', awarded: 30, date: '2026-08-18T10:00:00Z', total: 1200, trigger: { id: 't2', type: 'streak', points: 30, streakLengthThreshold: 7 } },
        ]}
      />
    </div>
  )
}
