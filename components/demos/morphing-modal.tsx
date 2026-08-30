'use client'

import { MorphingModal } from '@/components/kidow/morphing-modal/components/motion/morphing-modal'

export default function MorphingModalDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <MorphingModal viewId="수집" onClose={() => {}}>한 곳에 모은 컴포넌트</MorphingModal>
    </div>
  )
}
