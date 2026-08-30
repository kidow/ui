'use client'

import {
  TextStaggerHover,
  TextStaggerHoverActive,
  TextStaggerHoverHidden,
} from '@/components/kidow/text-stagger-hover'

export default function TextStaggerHoverDemo() {
  return (
    <div className="flex min-h-32 items-center justify-center p-4 text-3xl font-semibold">
      <TextStaggerHover>
        <TextStaggerHoverHidden>kidow/ui</TextStaggerHoverHidden>
        <TextStaggerHoverActive>kidow/ui</TextStaggerHoverActive>
      </TextStaggerHover>
    </div>
  )
}
