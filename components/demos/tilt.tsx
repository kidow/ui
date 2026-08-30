'use client'

import { Tilt } from '@/components/kidow/tilt'

export default function TiltDemo() {
  return (
    <div className="flex min-h-40 w-full items-center justify-center p-4">
      <Tilt rotationFactor={10}><div className="flex h-32 w-48 items-center justify-center rounded-xl border text-sm">기울어지는 카드</div></Tilt>
    </div>
  )
}
