'use client'

import BasicNumberTicker from '@/components/kidow/basic-number-ticker'

export default function BasicNumberTickerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <BasicNumberTicker from={1} target={1} />
    </div>
  )
}
