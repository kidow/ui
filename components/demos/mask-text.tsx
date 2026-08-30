'use client'

import MaskText from '@/components/kidow/mask-text'

export default function MaskTextDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <MaskText revealText="한 곳에 모았습니다" originalText="여러 UI 프레임워크" />
    </div>
  )
}
