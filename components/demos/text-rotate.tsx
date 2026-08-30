'use client'

import TextRotate from '@/components/kidow/text-rotate'

export default function TextRotateDemo() {
  return (
    <div className="p-4 text-2xl font-semibold">
      <TextRotate texts={['수집', '정규화', '출처 표기']} rotationInterval={1600} />
    </div>
  )
}
