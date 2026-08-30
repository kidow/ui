'use client'

import { InView } from '@/components/kidow/in-view'

export default function InViewDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <InView><div className="rounded-lg border p-6 text-sm">화면에 들어오면 나타납니다</div></InView>
    </div>
  )
}
