'use client'

import { CountUp } from '@/components/kidow/count-up'

export default function CountUpDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <CountUp value={72} />
    </div>
  )
}
