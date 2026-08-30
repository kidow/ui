'use client'

import { PageTransition } from '@/components/kidow/page-transition'

export default function PageTransitionDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <PageTransition isVisible />
    </div>
  )
}
