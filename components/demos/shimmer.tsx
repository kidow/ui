'use client'

import { Shimmer } from '@/components/kidow/shimmer'

export default function ShimmerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <Shimmer>여기를 보세요</Shimmer>
    </div>
  )
}
