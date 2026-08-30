'use client'

import { AngledSlider } from '@/components/kidow/angled-slider'

export default function AngledSliderDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <AngledSlider
        items={[
          { id: 1, url: '/demo-1.svg' },
          { id: 2, url: '/demo-2.svg' },
          { id: 3, url: '/demo-3.svg' },
        ]}
      />
    </div>
  )
}
