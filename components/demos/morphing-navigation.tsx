'use client'

import MorphingNavigation from '@/components/kidow/morphing-navigation'

export default function MorphingNavigationDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <MorphingNavigation links={[{ id: '수집', label: '수집', href: '수집' }, { id: '정규화', label: '정규화', href: '정규화' }, { id: '출처', label: '출처', href: '출처' }]} />
    </div>
  )
}
