'use client'

import { BlurVignette } from '@/components/kidow/blur-vignette'

export default function BlurVignetteDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <BlurVignette><div className="h-40 w-64 bg-[url(/demo-1.svg)] bg-cover" /></BlurVignette>
    </div>
  )
}
