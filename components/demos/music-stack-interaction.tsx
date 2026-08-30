'use client'

import MusicStackInteraction from '@/components/kidow/music-stack-interaction'

export default function MusicStackInteractionDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <MusicStackInteraction
        albums={[
          { id: 1, title: '수집', artist: 'kidow/ui', cover: '/demo-1.svg' },
          { id: 2, title: '정규화', artist: 'kidow/ui', cover: '/demo-2.svg' },
          { id: 3, title: '출처', artist: 'kidow/ui', cover: '/demo-3.svg' },
        ]}
      />
    </div>
  )
}
