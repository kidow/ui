'use client'

import { AchievementBadge } from '@/components/kidow/achievement-badge'

export default function AchievementBadgeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <AchievementBadge achievement={{ id: '1', name: '첫 수집', trigger: 'metric', achievedAt: '2026-08-01' }} />
    </div>
  )
}
