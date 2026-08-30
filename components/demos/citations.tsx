'use client'

import { Citations } from '@/components/kidow/citations/components/agents/citations'

export default function CitationsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <Citations citations={[{ id: '수집', title: '수집' }, { id: '정규화', title: '정규화' }, { id: '출처', title: '출처' }]} />
    </div>
  )
}
