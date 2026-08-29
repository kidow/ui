'use client'

import { ExplodingInput } from '@/components/kidow/exploding-input'

export default function ExplodingInputDemo() {
  return (
    <div className="w-64">
      <ExplodingInput content={['✦', '✧', '★']} />
    </div>
  )
}
