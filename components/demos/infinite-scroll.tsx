'use client'

import InfiniteScroll from '@/components/kidow/infinite-scroll'

export default function InfiniteScrollDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <InfiniteScroll isLoading={false} hasMore={false} next={() => {}} />
    </div>
  )
}
