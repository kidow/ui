'use client'

import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from '@/components/kidow/morphing-popover'

export default function MorphingPopoverDemo() {
  return (
    <div className="flex min-h-40 items-center justify-center p-4">
      <MorphingPopover>
        <MorphingPopoverTrigger className="rounded-md border px-3 py-1.5 text-sm">
          메모 남기기
        </MorphingPopoverTrigger>
        <MorphingPopoverContent className="rounded-xl border p-4">
          <p className="text-muted-foreground text-sm">
            트리거에서 그대로 늘어나며 열립니다.
          </p>
        </MorphingPopoverContent>
      </MorphingPopover>
    </div>
  )
}
