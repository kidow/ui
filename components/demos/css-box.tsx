'use client'

import CssBox from '@/components/kidow/css-box'

export default function CssBoxDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <CssBox width={1} height={1} depth={1} />
    </div>
  )
}
