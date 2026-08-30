'use client'

import { SkeletonLoader } from '@/components/kidow/skeleton-loader'

export default function SkeletonLoaderDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SkeletonLoader />
    </div>
  )
}
