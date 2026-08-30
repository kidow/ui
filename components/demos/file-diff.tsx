'use client'

import { FileDiff } from '@/components/kidow/file-diff/components/agents/file-diff'

export default function FileDiffDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <FileDiff file="registry.json" lines={[{ id: '1', type: 'added', content: '+ \"name\": \"marquee\"' }, { id: '2', type: 'removed', content: '- \"name\": \"old\"' }]} />
    </div>
  )
}
