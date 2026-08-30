'use client'

import { Ring, RingChart } from '@/components/kidow/bklit/charts'

export default function RingChartDemo() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <RingChart
        size={200}
        data={[
          { label: '수집', value: 1173, maxValue: 1500 },
          { label: '출처', value: 32, maxValue: 40 },
          { label: '카테고리', value: 14, maxValue: 14 },
        ]}
      >
        {[0, 1, 2].map((index) => (
          <Ring key={index} index={index} />
        ))}
      </RingChart>
    </div>
  )
}
