'use client'

import { useRef } from 'react'

import { TimelineAnimation } from '@/components/kidow/timeline-animation'

const STEPS = ['레지스트리 등록', 'MCP 연결', '에이전트가 설치']

export default function TimelineAnimationDemo() {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={timelineRef} className="w-full max-w-sm space-y-3 p-4">
      {STEPS.map((step, index) => (
        <TimelineAnimation
          key={step}
          animationNum={index}
          timelineRef={timelineRef}
          className="rounded-lg border p-4 text-sm"
        >
          {step}
        </TimelineAnimation>
      ))}
    </div>
  )
}
