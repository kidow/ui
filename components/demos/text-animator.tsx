'use client'

import TextAnimator from '@/components/kidow/text-animator'

const PHASE = {
  durationMs: 600,
  staggerMs: 40,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  from: { opacity: 0, yPx: 12 },
  to: { opacity: 1, yPx: 0 },
}

export default function TextAnimatorDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center p-4 text-2xl font-semibold">
      <TextAnimator
        spec={{
          target: 'per-character',
          enter: PHASE,
          exit: { ...PHASE, from: { opacity: 1, yPx: 0 }, to: { opacity: 0, yPx: -12 } },
        }}
        samples={['여러 UI 를 한 곳에', '출처와 함께', 'MCP 로 설치']}
      />
    </div>
  )
}
