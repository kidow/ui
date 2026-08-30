'use client'

import { StreakCalendar } from '@/components/kidow/streak-calendar'

export default function StreakCalendarDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <StreakCalendar streak={[{ periodStart: '수집', periodEnd: '수집' }, { periodStart: '정규화', periodEnd: '정규화' }, { periodStart: '출처', periodEnd: '출처' }]} />
    </div>
  )
}
