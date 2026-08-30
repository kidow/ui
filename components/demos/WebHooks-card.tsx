'use client'

import { WebHooks } from '@/components/kidow/WebHooks-card'

export default function WebHooksCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <WebHooks leftBoxElem="레지스트리" rightBoxElem="에이전트" />
    </div>
  )
}
