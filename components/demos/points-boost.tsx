'use client'

import { PointsBoost } from '@/components/kidow/points-boost'

export default function PointsBoostDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <PointsBoost
        boost={{ name: '주말 부스트', status: 'active', multiplier: 2, endDate: '2026-09-01' }}
        cta={{ link: '#', text: '자세히 보기' }}
      />
    </div>
  )
}
