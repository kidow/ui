'use client'

import ThreeDCarousel from '@/components/kidow/3d-carousel'

export default function _3dCarouselDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ThreeDCarousel items={[
          { id: 1, title: '수집', brand: 'kidow/ui', description: '문서 URL 하나로 시작합니다.', tags: ['registry', 'mcp'], imageUrl: '/demo-1.svg', link: '#' },
          { id: 2, title: '정규화', brand: 'kidow/ui', description: 'import 와 토큰만 손봅니다.', tags: ['normalize'], imageUrl: '/demo-2.svg', link: '#' },
          { id: 3, title: '출처', brand: 'kidow/ui', description: '라이선스까지 기록합니다.', tags: ['license'], imageUrl: '/demo-3.svg', link: '#' },
        ]} />
    </div>
  )
}
