'use client'

import CursorAttractorAndGravity, {
  MatterBody,
} from '@/components/kidow/cursor-attractor-and-gravity'

export default function CursorAttractorAndGravityDemo() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl border">
      <CursorAttractorAndGravity className="h-full w-full">
        {Array.from({ length: 24 }, (_, index) => (
          <MatterBody
            key={index}
            x={`${8 + (index % 8) * 11}%`}
            y={`${15 + Math.floor(index / 8) * 22}%`}
            bodyType="circle"
          >
            <span className="bg-foreground block size-4 rounded-full" />
          </MatterBody>
        ))}
      </CursorAttractorAndGravity>
    </div>
  )
}
