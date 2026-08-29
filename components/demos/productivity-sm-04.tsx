'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import ProductivitySm04 from '@/components/kidow/productivity-sm-04'

export default function ProductivitySm04Demo() {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <TooltipProvider><ProductivitySm04 /></TooltipProvider>
    </div>
  )
}
