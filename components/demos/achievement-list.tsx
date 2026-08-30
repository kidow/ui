'use client'

import { AchievementList } from '@/components/kidow/achievement-list'

export default function AchievementListDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <AchievementList achievements={[
          { id: '1', name: '첫 수집', trigger: 'metric', progress: 100, achievedAt: '2026-08-01' },
          { id: '2', name: '100개 돌파', trigger: 'metric', progress: 100, achievedAt: '2026-08-15' },
          { id: '3', name: '1000개 돌파', trigger: 'metric', progress: 60, achievedAt: null },
        ]} />
    </div>
  )
}
