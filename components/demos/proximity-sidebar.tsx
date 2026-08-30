'use client'

import ProximitySidebar from '@/components/kidow/proximity-sidebar'

export default function ProximitySidebarDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ProximitySidebar sections={[{ id: '수집', label: '수집' }, { id: '정규화', label: '정규화' }, { id: '출처', label: '출처' }]} />
    </div>
  )
}
