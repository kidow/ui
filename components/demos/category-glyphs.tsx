'use client'

import { CategoryGlyph } from '@/components/kidow/category-glyphs'

export default function CategoryGlyphsDemo() {
  return (
    <div className="flex min-h-32 w-full items-center justify-center gap-4 p-4">
      {['wide', 'tall', 'square'].map((variant) => (
        <CategoryGlyph key={variant} variant={variant} />
      ))}
    </div>
  )
}
