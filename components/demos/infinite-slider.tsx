'use client'

import { InfiniteSlider } from '@/components/kidow/infinite-slider'

export default function InfiniteSliderDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <InfiniteSlider gap={24}>{["MagicUI","Cult UI","Kibo UI","Motion Primitives"].map((t)=>(<span key={t} className="text-muted-foreground text-sm">{t}</span>))}</InfiniteSlider>
    </div>
  )
}
