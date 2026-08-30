'use client'

import { RollingText3D } from '@/components/kidow/rolling-text-3d'

export default function RollingText_3dDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <RollingText3D text={"여러 UI 를 한 곳에"} />
    </div>
  )
}
