'use client'

import { TextEffect } from '@/components/kidow/text-effect'

export default function TextEffectDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <TextEffect per="word" preset="blur" className="text-2xl font-semibold">여러 UI 를 한 곳에</TextEffect>
    </div>
  )
}
