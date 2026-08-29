'use client'

import StackedLogos from '@/components/kidow/stacked-logos'

export default function StackedLogosDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <StackedLogos logoGroups={[['MagicUI', 'Componentry'], ['Spell UI', 'jal-co/ui']].map((group) =>
        group.map((n) => <span key={n} className="text-sm font-medium">{n}</span>)
      )} />
    </div>
  )
}
