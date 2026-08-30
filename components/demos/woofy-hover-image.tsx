'use client'

import WoofyHoverImage from '@/components/kidow/woofy-hover-image'

export default function WoofyHoverImageDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <WoofyHoverImage src={"/demo-1.svg"} />
    </div>
  )
}
