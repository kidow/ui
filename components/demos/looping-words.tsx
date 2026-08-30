'use client'

import { LoopingWords } from '@/components/kidow/looping-words'

export default function LoopingWordsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LoopingWords words={["빠른", "가벼운", "자연스러운"]} />
    </div>
  )
}
