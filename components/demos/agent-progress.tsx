'use client'

import { AgentProgress } from '@/components/kidow/agent-progress/components/agents/loading-states/agent-progress'

export default function AgentProgressDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <AgentProgress />
    </div>
  )
}
