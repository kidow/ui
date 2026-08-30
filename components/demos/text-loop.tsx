'use client'

import { TextLoop } from '@/components/kidow/text-loop'

export default function TextLoopDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <TextLoop className="text-2xl font-semibold"><span>수집</span><span>정규화</span><span>출처 표기</span></TextLoop>
    </div>
  )
}
