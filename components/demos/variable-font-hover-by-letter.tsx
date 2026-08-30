'use client'

import VariableFontHoverByLetter from '@/components/kidow/variable-font-hover-by-letter'

export default function VariableFontHoverByLetterDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <VariableFontHoverByLetter label="수집" fromFontVariationSettings="수집" toFontVariationSettings="수집" />
    </div>
  )
}
