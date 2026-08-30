'use client'

import { ChromaticTextReveal } from '@/components/kidow/chromatic-text-reveal/components/motion/chromatic-text-reveal'

export default function ChromaticTextRevealDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ChromaticTextReveal prefix="여러 UI 를 " words={["한 곳에", "출처와 함께", "MCP 로"]} />
    </div>
  )
}
