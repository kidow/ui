'use client'

import { ReleaseBadge } from '@/components/kidow/release-badge/release-badge'

export default function ReleaseBadgeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ReleaseBadge owner="shadcn-ui" repo="ui" />
    </div>
  )
}
