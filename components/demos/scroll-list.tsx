'use client'

import ScrollList from '@/components/kidow/scroll-list'

export default function ScrollListDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ScrollList
        data={['수집', '정규화', '출처 표기', 'MCP 설치']}
        renderItem={(item: string) => (
          <div className="flex h-full items-center justify-center rounded-lg border p-4 text-sm">{item}</div>
        )}
      />
    </div>
  )
}
