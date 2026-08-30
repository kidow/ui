'use client'

import { HoldToConfirmButton } from '@/components/kidow/hold-to-confirm'

export default function HoldToConfirmDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <HoldToConfirmButton onConfirm={() => {}} />
    </div>
  )
}
