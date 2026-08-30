'use client'

import SpeedDial from '@/components/kidow/speed-dial'

export default function SpeedDialDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SpeedDial actionButtons={[{ icon: '수집', label: '수집', key: '수집', action: () => {} }, { icon: '정규화', label: '정규화', key: '정규화', action: () => {} }, { icon: '출처', label: '출처', key: '출처', action: () => {} }]} />
    </div>
  )
}
