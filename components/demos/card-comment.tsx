'use client'

import { CardComment } from '@/components/kidow/card-comment'

export default function CardCommentDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <CardComment commenter="수집" replier="수집" />
    </div>
  )
}
