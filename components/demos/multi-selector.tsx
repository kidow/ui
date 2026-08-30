'use client'

import { MultiSelect } from '@/components/kidow/multi-selector/multi-selector'

export default function MultiSelectorDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <MultiSelect options={[{ label: "버튼", value: "buttons" }, { label: "배경", value: "background" }]} onValueChange={() => {}} />
    </div>
  )
}
