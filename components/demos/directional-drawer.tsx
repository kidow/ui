'use client'

import { DirectionalDrawer } from '@/components/kidow/directional-drawer'

export default function DirectionalDrawerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DirectionalDrawer><div className="p-4 text-sm">드로어 내용</div></DirectionalDrawer>
    </div>
  )
}
