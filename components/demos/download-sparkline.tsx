'use client'

import { DownloadSparkline } from '@/components/kidow/download-sparkline/download-sparkline'

export default function DownloadSparklineDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DownloadSparkline package="수집" />
    </div>
  )
}
