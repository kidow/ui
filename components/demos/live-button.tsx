'use client'

import LiveButton from '@/components/kidow/live-button'

export default function LiveButtonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LiveButton text="수집" url="수집" />
    </div>
  )
}
