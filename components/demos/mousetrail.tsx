'use client'

import Mousetrail from '@/components/kidow/mousetrail'

export default function MousetrailDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <Mousetrail items={["/demo-1.svg", "/demo-2.svg", "/demo-3.svg", "/demo-4.svg"]} />
    </div>
  )
}
