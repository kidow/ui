'use client'

import { ExpandableButton } from '@/components/kidow/expandable-control/components/motion/expandable-control'

export default function ExpandableControlDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ExpandableButton icon="＋" label="컴포넌트 추가" />
    </div>
  )
}
