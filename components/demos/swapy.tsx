'use client'

import { SwapyItem, SwapyLayout, SwapySlot } from '@/components/kidow/swapy'

export default function SwapyDemo() {
  return (
    <SwapyLayout id="demo" className="grid w-full max-w-sm grid-cols-2 gap-3 p-4">
      {['수집', '정규화', '출처', '배포'].map((label) => (
        <SwapySlot key={label} id={label} className="h-20">
          <SwapyItem id={label} className="flex h-full items-center justify-center rounded-lg border text-sm">
            {label}
          </SwapyItem>
        </SwapySlot>
      ))}
    </SwapyLayout>
  )
}
