'use client'

import { ToolResult } from '@/components/kidow/tool-result/components/agents/tool-result'

export default function ToolResultDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ToolResult tool="registry.search" title="marquee 검색 결과">3개를 찾았습니다</ToolResult>
    </div>
  )
}
