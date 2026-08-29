'use client'

import { AnimatedNumber } from '@/components/kidow/animated-number'

export default function AnimatedNumberDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <AnimatedNumber value={1284} />
    </div>
  )
}
