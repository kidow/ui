'use client'

import { EntityChip } from '@/components/kidow/entity-chip'

export default function EntityChipDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <EntityChip name="수집" />
    </div>
  )
}
