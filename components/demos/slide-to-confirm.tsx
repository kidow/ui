'use client'

import { SlideToConfirm } from '@/components/kidow/slide-to-confirm'

export default function SlideToConfirmDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SlideToConfirm onConfirm={() => {}} />
    </div>
  )
}
