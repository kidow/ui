'use client'

import BreathingText from '@/components/kidow/breathing-text'

export default function BreathingTextDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <BreathingText fromFontVariationSettings="수집" toFontVariationSettings="수집">한 곳에 모은 컴포넌트</BreathingText>
    </div>
  )
}
