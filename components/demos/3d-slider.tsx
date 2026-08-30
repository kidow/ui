'use client'

import _3dSlider from '@/components/kidow/3d-slider'

export default function _3dSliderDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <_3dSlider items={[{ title: '수집', num: '수집', imageUrl: '수집' }, { title: '정규화', num: '정규화', imageUrl: '정규화' }, { title: '출처', num: '출처', imageUrl: '출처' }]} />
    </div>
  )
}
