'use client'

import { useState } from 'react'

import { Cascader } from '@/registry/kidow/cascader/cascader'

const options = [
  {
    value: 'seoul',
    label: '서울',
    children: [
      { value: 'gangnam', label: '강남구' },
      { value: 'mapo', label: '마포구' },
      { value: 'jongno', label: '종로구' },
    ],
  },
  {
    value: 'gyeonggi',
    label: '경기도',
    children: [
      { value: 'seongnam', label: '성남시' },
      { value: 'suwon', label: '수원시' },
    ],
  },
  {
    value: 'jeju',
    label: '제주',
    children: [{ value: 'jeju-si', label: '제주시' }],
  },
]

export default function CascaderDemo() {
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="w-72">
      <Cascader options={options} value={value} onChange={setValue} />
    </div>
  )
}
