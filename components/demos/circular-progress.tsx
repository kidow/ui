'use client'

import { CircularProgress } from '@/components/kidow/circular-progress'

export default function CircularProgressDemo() {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <CircularProgress percentageComplete={68} taskType="수집 진행" />
    </div>
  )
}
