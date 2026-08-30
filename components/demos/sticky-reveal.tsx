'use client'

import { StickyReveal } from '@/components/kidow/sticky-reveal'

export default function StickyRevealDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <StickyReveal
        content={[
          { title: '수집', description: '문서 URL 하나로 시작합니다.' },
          { title: '정규화', description: 'import 와 토큰만 손봅니다.' },
          { title: '출처', description: '라이선스까지 기록합니다.' },
        ]}
      />
    </div>
  )
}
