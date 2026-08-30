'use client'

import _3dImageRing from '@/components/kidow/3d-image-ring'

export default function _3dImageRingDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <_3dImageRing images={["/demo-1.svg", "/demo-2.svg", "/demo-3.svg", "/demo-4.svg"]} />
    </div>
  )
}
