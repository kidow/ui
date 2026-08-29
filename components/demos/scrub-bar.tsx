'use client'

import { useState } from 'react'

import {
  ScrubBarContainer,
  ScrubBarProgress,
  ScrubBarThumb,
  ScrubBarTimeLabel,
  ScrubBarTrack,
} from '@/components/kidow/scrub-bar'

export default function ScrubBarDemo() {
  const [value, setValue] = useState(42)

  return (
    <div className="flex w-full max-w-md items-center gap-3">
      <ScrubBarTimeLabel time={value} />
      <ScrubBarContainer
        className="flex-1"
        value={value}
        duration={100}
        onScrub={setValue}
      >
        <ScrubBarTrack>
          <ScrubBarProgress />
        </ScrubBarTrack>
        <ScrubBarThumb />
      </ScrubBarContainer>
      <ScrubBarTimeLabel time={100} />
    </div>
  )
}
