'use client'

import SharedTooltipAvatars from '@/components/kidow/shared-tooltip-avatars'

export default function SharedTooltipAvatarsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <SharedTooltipAvatars items={[{ id: '1', name: '지민', image: '/demo-1.svg' }, { id: '2', name: 'Alex', image: '/demo-2.svg' }, { id: '3', name: '현우', image: '/demo-3.svg' }]} />
    </div>
  )
}
