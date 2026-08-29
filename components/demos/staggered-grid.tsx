'use client'

import StaggeredGrid from '@/components/kidow/staggered-grid'

export default function StaggeredGridDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <StaggeredGrid images={['/demo-1.svg', '/demo-2.svg', '/demo-3.svg', '/demo-4.svg']} bentoItems={[{ id: 1, title: '수집', subtitle: '문서 URL 하나', description: '원본에서 코드와 의존성을 가져옵니다.', icon: null }]} />
    </div>
  )
}
