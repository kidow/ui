'use client'

import DirectionCard, { testDirectionProps } from '@/components/kidow/direction-card'

export default function DirectionCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <DirectionCard directionValues={testDirectionProps.directionValues} />
    </div>
  )
}
