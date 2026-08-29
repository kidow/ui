'use client'

import ImageRevealList from '@/components/kidow/image-reveal-list'

export default function ImageRevealListDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <ImageRevealList items={[{ id: '1', title: '수집', image: '/demo-1.svg', number: '01' }, { id: '2', title: '정규화', image: '/demo-2.svg', number: '02' }, { id: '3', title: '출처 표기', image: '/demo-3.svg', number: '03' }]} />
    </div>
  )
}
