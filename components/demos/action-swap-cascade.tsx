'use client'

import { ActionSwapCascadeButton } from '@/components/kidow/action-swap-cascade/components/motion/action-swap-cascade'

export default function ActionSwapCascadeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ActionSwapCascadeButton items={[{ id: 'collect', label: '수집' }, { id: 'normalize', label: '정규화' }, { id: 'source', label: '출처' }]} />
    </div>
  )
}
