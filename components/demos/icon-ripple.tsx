'use client'

import { Boxes } from 'lucide-react'

import IconRipple from '@/components/kidow/icon-ripple'

export default function IconRippleDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <IconRipple icon={Boxes} />
    </div>
  )
}
