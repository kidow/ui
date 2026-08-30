'use client'

import CategorySkeleton from '@/components/kidow/category-skeleton'

export default function CategorySkeletonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <CategorySkeleton variant="wide" />
    </div>
  )
}
