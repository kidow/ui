'use client'

import TestimonialsCard from '@/components/kidow/testimonials-card'

export default function TestimonialsCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <TestimonialsCard items={[{ id: 1, title: '지민', description: '검색 한 번으로 찾았습니다.', image: '/demo-1.svg' }, { id: 2, title: 'Alex', description: 'Exactly what I needed.', image: '/demo-2.svg' }]} />
    </div>
  )
}
