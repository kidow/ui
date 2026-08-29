'use client'

import { useState } from 'react'
import type { Value } from 'react-phone-number-input'

import { PhoneInput } from '@/components/kidow/phone-input'

export default function PhoneInputDemo() {
  const [value, setValue] = useState<Value>()

  return (
    <div className="w-72">
      <PhoneInput
        value={value}
        onChange={setValue}
        defaultCountry="KR"
        placeholder="전화번호를 입력하세요"
      />
    </div>
  )
}
