'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import WeatherMd01 from '@/components/kidow/weather-md-01'

export default function WeatherMd01Demo() {
  return (
    <div className="flex w-full items-center justify-center p-2">
      <TooltipProvider><WeatherMd01 /></TooltipProvider>
    </div>
  )
}
