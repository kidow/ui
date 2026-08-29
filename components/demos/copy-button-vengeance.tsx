'use client'

import { CopyButton } from '@/components/kidow/copy-button-vengeance'

export default function CopyButtonVengeanceDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <CopyButton code="npx shadcn@latest add @kidow/marquee" />
    </div>
  )
}
