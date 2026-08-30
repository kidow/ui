'use client'

import { TagsInput } from '@/components/kidow/tags-input'

export default function TagsInputDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TagsInput tags={["수집", "정규화"]} setTags={() => {}} />
    </div>
  )
}
