'use client'

import { useEffect, useState } from 'react'

import { LiveLine, LiveLineChart, LiveXAxis } from '@/components/kidow/bklit/charts'

/** 상류 예제는 지금 배포되는 컴포넌트와 prop 이 달라 직접 썼다. */
export default function LiveLineChartDemo() {
  const [points, setPoints] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      time: Math.floor(Date.now() / 1000) - (30 - i),
      value: 50 + Math.sin(i / 3) * 20,
    }))
  )

  useEffect(() => {
    const id = setInterval(() => {
      setPoints((prev) => {
        const last = prev[prev.length - 1]
        const next = {
          time: last.time + 1,
          value: Math.max(0, Math.min(100, last.value + (Math.random() - 0.5) * 12)),
        }
        return [...prev.slice(-59), next]
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="h-56 w-full p-4">
      <LiveLineChart data={points} value={points[points.length - 1].value} window={30}>
        <LiveLine dataKey="value" />
        <LiveXAxis />
      </LiveLineChart>
    </div>
  )
}
