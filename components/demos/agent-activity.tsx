'use client'

import { AgentActivity } from '@/components/kidow/agent-activity/components/agents/agent-activity/index'

export default function AgentActivityDemo() {
  return (
    <div className="w-full max-w-sm p-4">
      <AgentActivity
        items={[
          { id: '1', type: 'step', label: '레지스트리 검색', status: 'complete' },
          { id: '2', type: 'step', label: '컴포넌트 설치', status: 'active' },
          { id: '3', type: 'text', content: 'marquee 를 찾았습니다.' },
        ]}
      />
    </div>
  )
}
