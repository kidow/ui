'use client'

import FundWidget from '@/components/kidow/fund-widget'

export default function FundWidgetDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <FundWidget funds={[{ value: '수집', change: 1, label: '수집' }, { value: '정규화', change: 2, label: '정규화' }, { value: '출처', change: 3, label: '출처' }]} />
    </div>
  )
}
