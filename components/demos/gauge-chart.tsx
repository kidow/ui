"use client"

// In your app (monorepo/npm): import { Gauge } from "@bklitui/ui/charts"
import { Gauge } from "@/components/kidow/bklit/charts"



export default function GaugeChartDemo() {
  return (
    <main className="flex w-full items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <Gauge
  value={72}
  centerValue={72}
  totalNotches={40}
  defaultLabel="Score"
  formatOptions={{ style: "percent" }}
/>
      </div>
    </main>
  )
}
