'use client'

import Counter from '@/components/kidow/counter'

export default function CounterDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <Counter targetValue={1} />
    </div>
  )
}
