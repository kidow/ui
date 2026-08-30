'use client'

import ContentScan from '@/components/kidow/content-scan'

export default function ContentScanDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ContentScan content="여러 UI 프레임워크의 컴포넌트를 한 레지스트리에 모았습니다." highlightWords={['레지스트리', '컴포넌트']} />
    </div>
  )
}
