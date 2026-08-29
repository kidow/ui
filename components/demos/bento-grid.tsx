import { Sparkles } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/components/kidow/bento-grid'

const features = [
  { name: '수집', description: '문서 URL 하나로 시작', className: 'col-span-2' },
  { name: '출처', description: '라이선스까지 함께 기록', className: 'col-span-1' },
]

export default function BentoGridDemo() {
  return (
    <BentoGrid className="w-full grid-cols-3">
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          name={feature.name}
          description={feature.description}
          className={feature.className}
          Icon={Sparkles}
          background={<div className="bg-muted absolute inset-0" />}
          href="#"
          cta="자세히"
        />
      ))}
    </BentoGrid>
  )
}
