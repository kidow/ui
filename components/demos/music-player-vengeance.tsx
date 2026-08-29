'use client'

import MusicPlayerVengeance from '@/components/kidow/music-player-vengeance'

export default function MusicPlayerVengeanceDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <MusicPlayerVengeance tracks={[{ title: 'Sample Track', artist: 'Sample Artist', src: '', artwork: '/demo-2.svg' }]} />
    </div>
  )
}
