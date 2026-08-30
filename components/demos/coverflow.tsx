'use client'

import { CoverFlow } from '@/components/kidow/coverflow'

export default function CoverflowDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <CoverFlow items={[{ id: '수집', image: '수집', title: '수집' }, { id: '정규화', image: '정규화', title: '정규화' }, { id: '출처', image: '출처', title: '출처' }]} />
    </div>
  )
}
