'use client'

import { MediaBetweenText } from '@/components/kidow/media-between-text'

export default function MediaBetweenTextDemo() {
  return (
    <div className="p-4 text-2xl font-semibold">
      <MediaBetweenText
        firstText="여러 UI 를"
        secondText="한 곳에"
        mediaUrl="/demo-1.svg"
        mediaType="image"
        triggerType="hover"
      />
    </div>
  )
}
