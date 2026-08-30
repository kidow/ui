'use client'

import Faq from '@/components/kidow/faq'

export default function FaqDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <Faq data={[{ id: 1, question: '수집', answer: '수집' }, { id: 2, question: '정규화', answer: '정규화' }, { id: 3, question: '출처', answer: '출처' }]} />
    </div>
  )
}
