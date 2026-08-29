'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import StockSm05 from '@/components/kidow/stock-sm-05'

export default function StockSm05Demo() {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <TooltipProvider><StockSm05 /></TooltipProvider>
    </div>
  )
}
