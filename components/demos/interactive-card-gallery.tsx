'use client'

import { InteractiveCardGallery } from '@/components/kidow/interactive-card-gallery'

export default function InteractiveCardGalleryDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <InteractiveCardGallery cards={[{ title: '수집', description: '수집', imageSrc: '수집', buttonText: '수집' }, { title: '정규화', description: '정규화', imageSrc: '정규화', buttonText: '정규화' }, { title: '출처', description: '출처', imageSrc: '출처', buttonText: '출처' }]} />
    </div>
  )
}
