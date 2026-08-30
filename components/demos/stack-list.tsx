'use client'

import StackList from '@/components/kidow/stack-list'

export default function StackListDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <StackList items={[{ icon: '수집', title: '수집', subtitle: '수집', date: '수집' }, { icon: '정규화', title: '정규화', subtitle: '정규화', date: '정규화' }, { icon: '출처', title: '출처', subtitle: '출처', date: '출처' }]} />
    </div>
  )
}
