'use client'

import { useState } from 'react'

import { TransitionPanel } from '@/components/kidow/transition-panel'

const PANELS = [
  { title: '수집', body: '문서 URL 하나로 시작합니다.' },
  { title: '정규화', body: 'import 와 토큰만 손봅니다.' },
  { title: '출처', body: '라이선스까지 기록합니다.' },
]

export default function TransitionPanelDemo() {
  const [index, setIndex] = useState(0)

  return (
    <div className="w-full max-w-sm p-4">
      <div className="mb-3 flex gap-2">
        {PANELS.map((panel, i) => (
          <button
            key={panel.title}
            onClick={() => setIndex(i)}
            className={`rounded-md px-3 py-1.5 text-sm ${i === index ? 'bg-foreground text-background' : 'bg-muted'}`}
          >
            {panel.title}
          </button>
        ))}
      </div>
      <TransitionPanel
        activeIndex={index}
        transition={{ duration: 0.2 }}
        variants={{
          enter: { opacity: 0, y: -8 },
          center: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
        }}
      >
        {PANELS.map((panel) => (
          <div key={panel.title} className="rounded-lg border p-4 text-sm">
            {panel.body}
          </div>
        ))}
      </TransitionPanel>
    </div>
  )
}
