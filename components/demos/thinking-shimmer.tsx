'use client'

import { ThinkingShimmer } from '@/components/kidow/thinking-shimmer/components/agents/loading-states/thinking-shimmer'

export default function ThinkingShimmerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ThinkingShimmer />
    </div>
  )
}
