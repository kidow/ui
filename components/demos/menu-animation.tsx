'use client'

import MenuAnimation from '@/components/kidow/menu-animation'

export default function MenuAnimationDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <MenuAnimation menuItems={['홈', '컴포넌트', '출처', '문서']} />
    </div>
  )
}
