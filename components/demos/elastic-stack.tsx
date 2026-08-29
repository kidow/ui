'use client'

import ElasticStack from '@/components/kidow/elastic-stack'

export default function ElasticStackDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <ElasticStack items={[{ id: 1, image: '/demo-1.svg', name: '지민' }, { id: 2, image: '/demo-2.svg', name: 'Alex' }, { id: 3, image: '/demo-3.svg', name: '현우' }]} />
    </div>
  )
}
