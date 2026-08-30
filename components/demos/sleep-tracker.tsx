'use client'

import SleepTracker from '@/components/kidow/sleep-tracker'

export default function SleepTrackerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <SleepTracker items={[{ progress: 80, label: '수집' }, { progress: 55, label: '정규화' }, { progress: 35, label: '출처' }]} image="/demo-1.svg" />
    </div>
  )
}
