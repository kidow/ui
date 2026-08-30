'use client'

import { ScrollTimeline } from '@/components/kidow/scroll-timeline'

export default function ScrollTimelineDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScrollTimeline events={[{ year: '수집', title: '수집', description: '수집' }, { year: '정규화', title: '정규화', description: '정규화' }, { year: '출처', title: '출처', description: '출처' }]} />
    </div>
  )
}
