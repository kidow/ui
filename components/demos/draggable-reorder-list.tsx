'use client'

import { DraggableReorderList } from '@/components/kidow/draggable-reorder-list'

export default function DraggableReorderListDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DraggableReorderList items={[{ id: '수집', label: '수집' }, { id: '정규화', label: '정규화' }, { id: '출처', label: '출처' }]} />
    </div>
  )
}
