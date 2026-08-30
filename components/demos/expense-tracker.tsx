'use client'

import ExpenseTracker from '@/components/kidow/expense-tracker'

export default function ExpenseTrackerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ExpenseTracker spending={[{ day: '수집', amount: 1 }, { day: '정규화', amount: 2 }, { day: '출처', amount: 3 }]} />
    </div>
  )
}
