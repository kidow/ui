'use client'

import { Step, Steps } from '@/components/kidow/steps'

export default function StepsDemo() {
  return (
    <div className="w-full max-w-sm p-4">
      <Steps>
        <Step title="레지스트리 등록">
          components.json 에 네임스페이스를 추가합니다.
        </Step>
        <Step title="MCP 연결">shadcn CLI 의 MCP 서버를 켭니다.</Step>
        <Step title="설치">에이전트가 필요한 컴포넌트를 찾아 넣습니다.</Step>
      </Steps>
    </div>
  )
}
