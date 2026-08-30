'use client'

import { StreamingResponse } from '@/components/kidow/streaming-response/components/agents/streaming-response'

export default function StreamingResponseDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <StreamingResponse>여기를 보세요</StreamingResponse>
    </div>
  )
}
