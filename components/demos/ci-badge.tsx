'use client'

import { CIBadge } from '@/components/kidow/ci-badge/ci-badge'

export default function CiBadgeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <CIBadge owner="shadcn-ui" repo="ui" />
    </div>
  )
}
