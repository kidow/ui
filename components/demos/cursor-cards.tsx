'use client'

import {
  CursorCard,
  CursorCardsContainer,
} from '@/components/kidow/cursor-cards'

export default function CursorCardsDemo() {
  return (
    <CursorCardsContainer className="flex flex-wrap justify-center gap-4 p-4">
      {['수집', '정규화', '출처'].map((title) => (
        <CursorCard
          key={title}
          className="flex h-32 w-40 flex-col justify-end rounded-xl border p-4"
        >
          <p className="text-sm font-medium">{title}</p>
          <p className="text-muted-foreground text-xs">커서를 움직여 보세요</p>
        </CursorCard>
      ))}
    </CursorCardsContainer>
  )
}
