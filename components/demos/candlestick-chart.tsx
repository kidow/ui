'use client'

import { DefaultCandlestickChart } from '@/components/kidow/candlestick-chart/candlestick-chart'

export default function CandlestickChartDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DefaultCandlestickChart />
    </div>
  )
}
