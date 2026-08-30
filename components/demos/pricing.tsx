'use client'

import Pricing from '@/components/kidow/pricing'

export default function PricingDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <Pricing plans={[{ name: '수집', monthlyPrice: '수집', yearlyPrice: '수집' }, { name: '정규화', monthlyPrice: '정규화', yearlyPrice: '정규화' }, { name: '출처', monthlyPrice: '출처', yearlyPrice: '출처' }]} />
    </div>
  )
}
