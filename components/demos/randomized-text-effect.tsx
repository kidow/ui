'use client'

import { RandomizedTextEffect } from '@/components/kidow/randomized-text-effect'

export default function RandomizedTextEffectDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <RandomizedTextEffect text="여러 UI 를 한 곳에" />
    </div>
  )
}
