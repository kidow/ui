'use client'

import StaggeredCard from '@/components/kidow/staggered-card'

export default function StaggeredCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <StaggeredCard
        links={[
          { label: '수집', href: '#' },
          { label: '정규화', href: '#' },
          { label: '출처', href: '#' },
        ]}
      />
    </div>
  )
}
