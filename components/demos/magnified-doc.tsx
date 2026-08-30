'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/kidow/magnified-doc'

const ITEMS = ['수집', '정규화', '출처', '배포']

export default function MagnifiedDocDemo() {
  return (
    <TooltipProvider>
      <div className="flex min-h-40 items-end justify-center gap-3 p-6">
        {ITEMS.map((label) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <button className="bg-muted size-12 rounded-xl" aria-label={label} />
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
