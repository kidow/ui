'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import DashboardSm01 from '@/components/kidow/dashboard-sm-01'

export default function DashboardSm01Demo() {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <TooltipProvider><DashboardSm01 /></TooltipProvider>
    </div>
  )
}
