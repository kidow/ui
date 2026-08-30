'use client'

import { FunnelChart } from '@/components/kidow/bklit/charts'

export default function FunnelChartDemo() {
  return (
    <div className="w-full max-w-md p-4">
      <FunnelChart
        data={[
          { label: '방문', value: 12400 },
          { label: '레지스트리 등록', value: 5200 },
          { label: '컴포넌트 설치', value: 2100 },
          { label: '재방문', value: 890 },
        ]}
        showPercentage
      />
    </div>
  )
}
