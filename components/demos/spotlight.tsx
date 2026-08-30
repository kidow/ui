'use client'

import { Spotlight } from '@/components/kidow/spotlight'

export default function SpotlightDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <div className="relative h-32 w-64 overflow-hidden rounded-xl border"><Spotlight className="from-foreground/20 via-foreground/10 to-transparent" size={180} /><div className="flex h-full items-center justify-center text-sm">커서를 올려 보세요</div></div>
    </div>
  )
}
