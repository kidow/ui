'use client'

import { MorphPopover } from '@/components/kidow/popover-morph/components/motion/popover-morph'

export default function PopoverMorphDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <MorphPopover>입력해 보세요</MorphPopover>
    </div>
  )
}
