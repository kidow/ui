'use client'

import { AnimatedCopyButton } from '@/components/kidow/animated-copy-button'

export default function AnimatedCopyButtonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <AnimatedCopyButton textToCopy={"npx shadcn@latest add @kidow/marquee"} />
    </div>
  )
}
