'use client'

import CoolSlideGallery from '@/components/kidow/cool-slide-gallery'

export default function CoolSlideGalleryDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <CoolSlideGallery slides={[{ src: "/demo-1.svg", title: "수집" }, { src: "/demo-2.svg", title: "정규화" }, { src: "/demo-3.svg", title: "출처" }]} />
    </div>
  )
}
