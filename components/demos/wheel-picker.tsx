'use client'

import { WheelPicker } from '@/components/kidow/wheel-picker'

const options = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}월`,
  value: String(i + 1),
}))

export default function WheelPickerDemo() {
  return (
    <div className="flex w-40 items-center justify-center p-2">
      <WheelPicker options={options} />
    </div>
  )
}
