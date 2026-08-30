'use client'

import { BorderTrail } from '@/components/kidow/border-trail'

export default function BorderTrailDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <div className="relative h-24 w-48 rounded-xl border"><BorderTrail size={60} /><div className="flex h-full items-center justify-center text-sm">테두리를 도는 빛</div></div>
    </div>
  )
}
