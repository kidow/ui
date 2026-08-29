'use client'

import CursorCard from '@/components/kidow/cursor-card'

export default function CursorCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <CursorCard image="/demo-1.svg" description="커서를 따라 움직이는 카드">
        레지스트리 허브
      </CursorCard>
    </div>
  )
}
