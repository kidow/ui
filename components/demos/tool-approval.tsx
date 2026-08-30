'use client'

import { ToolApproval } from '@/components/kidow/tool-approval/components/agents/tool-approval'

export default function ToolApprovalDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ToolApproval tool="registry.add" />
    </div>
  )
}
