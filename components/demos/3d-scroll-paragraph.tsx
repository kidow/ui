'use client'

import { ScrollPara3D } from '@/components/kidow/3d-scroll-paragraph'

export default function _3dScrollParagraphDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ScrollPara3D lines={["여러 UI 프레임워크를", "한 곳에 모았습니다", "출처와 함께"]} />
    </div>
  )
}
