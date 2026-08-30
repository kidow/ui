'use client'

import NavTabs from '@/components/kidow/nav-tabs'

export default function NavTabsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <NavTabs tabs={['홈', '컴포넌트', '출처', '문서']} />
    </div>
  )
}
