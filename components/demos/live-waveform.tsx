'use client'

import { LiveWaveform } from '@/components/kidow/live-waveform'

export default function LiveWaveformDemo() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-2">
      <LiveWaveform active={false} />
      <p className="text-muted-foreground text-xs">
        마이크 권한을 허용하면 실시간 입력이 그려집니다
      </p>
    </div>
  )
}
