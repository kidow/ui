'use client'

import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from '@/components/kidow/progressive-carousel'

const SLIDES = [
  { value: 'collect', title: '수집', image: '/demo-1.svg' },
  { value: 'normalize', title: '정규화', image: '/demo-2.svg' },
  { value: 'source', title: '출처', image: '/demo-3.svg' },
]

export default function ProgressiveCarouselDemo() {
  return (
    <ProgressSlider
      vertical={false}
      activeSlider="collect"
      className="relative h-56 w-full max-w-md overflow-hidden rounded-xl border"
    >
      <SliderContent>
        {SLIDES.map((slide) => (
          <SliderWrapper key={slide.value} value={slide.value}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.image} alt={slide.title} className="h-56 w-full object-cover" />
          </SliderWrapper>
        ))}
      </SliderContent>
      <SliderBtnGroup className="absolute bottom-0 flex w-full">
        {SLIDES.map((slide) => (
          <SliderBtn key={slide.value} value={slide.value} className="flex-1 p-2 text-left text-xs">
            {slide.title}
          </SliderBtn>
        ))}
      </SliderBtnGroup>
    </ProgressSlider>
  )
}
