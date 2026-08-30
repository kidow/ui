'use client'

import { FaceIDScan } from '@/components/kidow/face-id-scan'

export default function FaceIdScanDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <FaceIDScan />
    </div>
  )
}
