'use client'

import { ActionSwapRollButton } from '@/components/kidow/action-swap-roll/components/motion/action-swap-roll'

export default function ActionSwapRollDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ActionSwapRollButton items={[{ id: 'collect', label: '수집' }, { id: 'normalize', label: '정규화' }, { id: 'source', label: '출처' }]} />
    </div>
  )
}
