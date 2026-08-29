'use client'

import { Matrix, wave } from '@/components/kidow/matrix-visualizer'

export default function MatrixVisualizerDemo() {
  return (
    <div className="flex w-full items-center justify-center">
      <Matrix rows={7} cols={7} frames={wave} fps={12} autoplay />
    </div>
  )
}
