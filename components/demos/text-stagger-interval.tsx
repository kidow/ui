'use client'

import { TextStaggerInterval } from '@/components/kidow/text-stagger-interval'

export default function TextStaggerIntervalDemo() {
  return (
    <div className="flex min-h-32 items-center justify-center p-4 text-2xl font-semibold">
      <TextStaggerInterval words={['수집', '정규화', '출처 표기']} />
    </div>
  )
}
