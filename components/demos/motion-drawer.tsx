'use client'

import MotionDrawer from '@/components/kidow/motion-drawer'

export default function MotionDrawerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <MotionDrawer><div className="p-4 text-sm">메뉴 내용</div></MotionDrawer>
    </div>
  )
}
