'use client'

import { MotionTabs } from '@/components/kidow/motion-tabs'

export default function MotionTabsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <MotionTabs
        items={[
          { value: 'collect', label: '수집', eyebrow: '01', title: ['문서 URL', '하나로'], description: '주소만 있으면 시작합니다.' },
          { value: 'normalize', label: '정규화', eyebrow: '02', title: ['import 와', '토큰만'], description: '실행되는 상태로 맞춥니다.' },
          { value: 'source', label: '출처', eyebrow: '03', title: ['라이선스까지', '기록'], description: '어디서 왔는지 남깁니다.' },
        ]}
      />
    </div>
  )
}
