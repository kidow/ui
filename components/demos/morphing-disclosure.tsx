'use client'

import { MoriphingDisclosure } from '@/components/kidow/morphing-disclosure'

export default function MorphingDisclosureDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <MoriphingDisclosure id="1" title="출처는 어떻게 표기되나요?" description="각 컴포넌트 상세 페이지에 원저자와 라이선스를 함께 적습니다." />
    </div>
  )
}
