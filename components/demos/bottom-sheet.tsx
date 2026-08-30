'use client'

import { BottomSheet } from '@/components/kidow/bottom-sheet/components/motion/bottom-sheet'

export default function BottomSheetDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <BottomSheet open onOpenChange={() => {}} />
    </div>
  )
}
