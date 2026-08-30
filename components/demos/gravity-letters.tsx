'use client'

import GravityLetters from '@/components/kidow/gravity-letters'

/** 포인터를 누르면 글자가 떨어진다. 안내가 없으면 빈 상자로 보인다. */
export default function GravityLettersDemo() {
  return (
    <div className="w-full p-4">
      <GravityLetters
        type="both"
        size={26}
        className="bg-muted/40 relative h-56 w-full cursor-crosshair overflow-hidden rounded-xl border"
      >
        <span className="text-muted-foreground pointer-events-none absolute inset-x-0 top-4 text-center text-xs">
          눌러서 글자를 떨어뜨려 보세요
        </span>
      </GravityLetters>
    </div>
  )
}
