'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import DashboardSm05 from '@/components/kidow/dashboard-sm-05'

export default function DashboardSm05Demo() {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <TooltipProvider><DashboardSm05 /></TooltipProvider>
    </div>
  )
}
