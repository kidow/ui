'use client'

import { Waveform } from '@/components/kidow/waveform'

// 파형 샘플. 실제로는 오디오 분석 결과를 넣는다.
const data = Array.from({ length: 64 }, (_, i) =>
  Math.abs(Math.sin(i / 4)) * 0.7 + (i % 5) * 0.05
)

export default function WaveformDemo() {
  return (
    <div className="w-full max-w-md">
      <Waveform data={data} height={96} />
    </div>
  )
}
