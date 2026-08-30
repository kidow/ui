'use client'

import { StreakCard } from '@/components/kidow/streak-card'

export default function StreakCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <StreakCard streak={[
          { periodStart: '2026-08-01', periodEnd: '2026-08-07' },
          { periodStart: '2026-08-09', periodEnd: '2026-08-20' },
        ]} currentStreak={12} longestStreak={20} total={86} />
    </div>
  )
}
