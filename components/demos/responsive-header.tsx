'use client'

import { HeaderDrawer } from '@/components/kidow/responsive-header'

export default function ResponsiveHeaderDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <HeaderDrawer><div className="p-4 text-sm">헤더 내용</div></HeaderDrawer>
    </div>
  )
}
