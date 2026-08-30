'use client'

import { Pulse } from '@/components/kidow/pulse'

export default function PulseDemo() {
  return (
    <div className="flex min-h-32 items-center gap-2 p-4 text-sm">
      <Pulse />
      <span>실시간 수집 중</span>
    </div>
  )
}
