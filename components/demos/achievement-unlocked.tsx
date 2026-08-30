'use client'

import { AchievementUnlocked } from '@/components/kidow/achievement-unlocked'

export default function AchievementUnlockedDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <AchievementUnlocked achievement={{ id: '수집', name: '수집' }} open onOpenChange={() => {}} />
    </div>
  )
}
