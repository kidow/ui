'use client'

import { PointsBadge } from '@/components/kidow/points-badge'

export default function PointsBadgeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <PointsBadge name="수집" total={1} />
    </div>
  )
}
