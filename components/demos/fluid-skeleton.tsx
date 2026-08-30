'use client'

import { FluidSkeleton } from '@/components/kidow/fluid-skeleton'

export default function FluidSkeletonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <FluidSkeleton />
    </div>
  )
}
