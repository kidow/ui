'use client'

import { SpotifyCard } from '@/components/kidow/spotify-card'

export default function SpotifyCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <SpotifyCard url="수집" />
    </div>
  )
}
