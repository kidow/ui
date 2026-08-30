'use client'

import { AchievementCard } from '@/components/kidow/achievement-card'

export default function AchievementCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <AchievementCard achievements={[
          { id: '1', name: '첫 수집', trigger: 'metric', progress: 100, achievedAt: '2026-08-01' },
          { id: '2', name: '100개 돌파', trigger: 'metric', progress: 100, achievedAt: '2026-08-15' },
          { id: '3', name: '1000개 돌파', trigger: 'metric', progress: 60, achievedAt: null },
        ]} highlightedAchievements={[
          { id: '1', name: '첫 수집', trigger: 'metric', progress: 100, achievedAt: '2026-08-01' },
          { id: '2', name: '100개 돌파', trigger: 'metric', progress: 100, achievedAt: '2026-08-15' },
          { id: '3', name: '1000개 돌파', trigger: 'metric', progress: 60, achievedAt: null },
        ]} />
    </div>
  )
}
