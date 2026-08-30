'use client'

import { ExpandableSpeedDial } from '@/components/kidow/expandable-speed-dial'

export default function ExpandableSpeedDialDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ExpandableSpeedDial actions={[{ icon: '수집', label: '수집', onClick: () => {} }, { icon: '정규화', label: '정규화', onClick: () => {} }, { icon: '출처', label: '출처', onClick: () => {} }]} />
    </div>
  )
}
