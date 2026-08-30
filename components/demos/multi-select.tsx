'use client'

import { useState } from 'react'

import { MultiSelect } from '@/components/kidow/multi-select'

const OPTIONS = [
  { label: '텍스트 효과', value: 'text' },
  { label: '배경·패턴', value: 'background' },
  { label: '버튼', value: 'buttons' },
  { label: '폼·입력', value: 'forms' },
  { label: '카드·테두리', value: 'cards' },
]

export default function MultiSelectDemo() {
  const [value, setValue] = useState(['text', 'background'])

  return (
    <div className="w-full max-w-sm p-4">
      <MultiSelect
        options={OPTIONS}
        onValueChange={setValue}
        defaultValue={value}
        placeholder="카테고리를 고르세요"
        maxCount={3}
      />
    </div>
  )
}
