'use client'

import Gravity, { MatterBody } from '@/components/kidow/gravity'

const TAGS = ['수집', '정규화', '출처', 'MCP', 'shadcn']

export default function GravityDemo() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl border">
      <Gravity gravity={{ x: 0, y: 1 }} className="h-full w-full">
        {TAGS.map((tag, index) => (
          <MatterBody
            key={tag}
            x={`${15 + index * 17}%`}
            y="10%"
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          >
            <span className="bg-foreground text-background rounded-full px-4 py-2 text-sm">
              {tag}
            </span>
          </MatterBody>
        ))}
      </Gravity>
    </div>
  )
}
