'use client'

import { KbdKey } from '@/components/kidow/kbd-key'

export default function KbdKeyDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <KbdKey>⌘K</KbdKey>
    </div>
  )
}
