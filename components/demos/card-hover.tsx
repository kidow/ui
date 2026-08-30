'use client'

import { CardHover } from '@/components/kidow/card-hover'

export default function CardHoverDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <CardHover items={[
          { id: '1', title: '수집', description: '문서 URL 하나로 시작합니다.' },
          { id: '2', title: '정규화', description: 'import 와 토큰만 손봅니다.' },
          { id: '3', title: '출처', description: '라이선스까지 기록합니다.' },
        ]} />
    </div>
  )
}
