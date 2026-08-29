'use client'

import TestinomialCard2 from '@/components/kidow/testinomial-card2'

export default function TestinomialCard2Demo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <TestinomialCard2 items={[{ title: '지민', company: 'kidow/ui', description: '검색 한 번으로 찾았습니다.', image: '/demo-1.svg' }, { title: 'Alex', company: 'Acme', description: 'Exactly what I needed.', image: '/demo-2.svg' }]} />
    </div>
  )
}
