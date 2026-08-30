'use client'

import { UndoPill } from '@/components/kidow/undo-pill'

export default function UndoPillDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <UndoPill open onUndo={() => {}} onExpire={() => {}} />
    </div>
  )
}
