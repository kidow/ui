'use client'

import InteractiveBook from '@/components/kidow/interactive-book'

export default function InteractiveBookDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <InteractiveBook coverImage="/demo-2.svg" bookTitle="kidow/ui" pages={[{ content: '여러 UI 프레임워크를 한 곳에', pageNumber: 1 }, { content: '출처와 라이선스를 함께 표기합니다', pageNumber: 2 }]} />
    </div>
  )
}
