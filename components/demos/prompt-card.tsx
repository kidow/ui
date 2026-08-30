'use client'

import { PromptCard } from '@/components/kidow/prompt-card'

export default function PromptCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <PromptCard prompt={{ id: 1, image: '/demo-1.svg', imageAlt: '미리보기', kicker: '수집', brand: 'kidow/ui', category: '레지스트리', title: '여러 UI 를 한 곳에', prompt: 'marquee 컴포넌트를 추가해 줘', footer: 'MCP 로 설치', palette: ['#0894FF', '#C959DD'] }} />
    </div>
  )
}
