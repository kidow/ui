'use client'

import { AnimatedToastStack } from '@/components/kidow/animated-toast-stack/components/motion/animated-toast-stack'

export default function AnimatedToastStackDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <AnimatedToastStack toasts={[{ id: '수집', title: '수집' }, { id: '정규화', title: '정규화' }, { id: '출처', title: '출처' }]} />
    </div>
  )
}
