'use client'

import { PointsLevelsTimeline } from '@/components/kidow/points-levels-timeline'

export default function PointsLevelsTimelineDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <PointsLevelsTimeline levels={[{ id: '수집', name: '수집', points: 1 }, { id: '정규화', name: '정규화', points: 2 }, { id: '출처', name: '출처', points: 3 }]} />
    </div>
  )
}
