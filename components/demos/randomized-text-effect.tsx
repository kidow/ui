'use client'

import { RandomizedTextEffect } from '@/components/kidow/randomized-text-effect'

export default function RandomizedTextEffectDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <RandomizedTextEffect text="한 곳에 모은 컴포넌트" />
    </div>
  )
}
