'use client'

import TestimonalSlider from '@/components/kidow/testimonal-slider'

export default function TestimonalSliderDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TestimonalSlider testimonials={[{ img: '수집', quote: '수집', name: '수집', role: '수집' }, { img: '정규화', quote: '정규화', name: '정규화', role: '정규화' }, { img: '출처', quote: '출처', name: '출처', role: '출처' }]} />
    </div>
  )
}
