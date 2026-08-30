'use client'

import { ActionSwapBlurButton } from '@/components/kidow/action-swap-blur/components/motion/action-swap-blur'

export default function ActionSwapBlurDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ActionSwapBlurButton items={[{ id: 'collect', label: '수집' }, { id: 'normalize', label: '정규화' }, { id: 'source', label: '출처' }]} />
    </div>
  )
}
