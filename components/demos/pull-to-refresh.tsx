'use client'

import { PullToRefresh } from '@/components/kidow/pull-to-refresh/components/motion/pull-to-refresh'

export default function PullToRefreshDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <PullToRefresh onRefresh={() => {}}>한 곳에 모은 컴포넌트</PullToRefresh>
    </div>
  )
}
