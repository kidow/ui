'use client'

import { ResponsiveModal } from '@/components/kidow/responsive-modal'

export default function ResponsiveModalDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ResponsiveModal><div className="p-4 text-sm">모달 내용</div></ResponsiveModal>
    </div>
  )
}
