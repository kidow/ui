'use client'

import { CharacterStagger } from '@/components/kidow/character-stagger'

export default function CharacterStaggerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <CharacterStagger text="수집" />
    </div>
  )
}
