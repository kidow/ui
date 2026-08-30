'use client'

import VariableFontHoverByRandomLetter from '@/components/kidow/variable-font-hover-by-random-letter'

export default function VariableFontHoverByRandomLetterDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <VariableFontHoverByRandomLetter label="수집" fromFontVariationSettings="수집" toFontVariationSettings="수집" />
    </div>
  )
}
