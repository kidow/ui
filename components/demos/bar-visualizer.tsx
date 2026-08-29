'use client'

import { BarVisualizer } from '@/components/kidow/bar-visualizer'

export default function BarVisualizerDemo() {
  return (
    <div className="flex h-32 w-full max-w-sm items-center justify-center">
      <BarVisualizer state="speaking" barCount={7} />
    </div>
  )
}
