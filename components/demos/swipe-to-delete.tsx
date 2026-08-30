'use client'

import { SwipeToDelete } from '@/components/kidow/swipe-to-delete'

export default function SwipeToDeleteDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SwipeToDelete onDelete={() => {}}><div className="w-64 p-4 text-sm">밀어서 삭제</div></SwipeToDelete>
    </div>
  )
}
