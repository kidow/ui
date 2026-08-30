'use client'

import { SkeletonCard } from '@/components/kidow/skeleton-card'

export default function SkeletonCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SkeletonCard />
    </div>
  )
}
