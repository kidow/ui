'use client'

import _3dPerspectiveCard from '@/components/kidow/3d-perspective-card'

export default function _3dPerspectiveCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <_3dPerspectiveCard image={"/demo-1.svg"} />
    </div>
  )
}
