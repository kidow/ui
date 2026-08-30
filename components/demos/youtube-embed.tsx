'use client'

import YoutubeEmbed from '@/components/kidow/youtube-embed'

export default function YoutubeEmbedDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <YoutubeEmbed videoId="수집" />
    </div>
  )
}
