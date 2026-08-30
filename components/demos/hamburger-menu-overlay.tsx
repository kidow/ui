'use client'

import HamburgerMenuOverlay from '@/components/kidow/hamburger-menu-overlay'

export default function HamburgerMenuOverlayDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <HamburgerMenuOverlay items={[{ label: '수집' }, { label: '정규화' }, { label: '출처' }]} />
    </div>
  )
}
