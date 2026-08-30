'use client'

import ScoreCard from '@/components/kidow/score-card'

export default function ScoreCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ScoreCard
        homeTeam={{ name: '수집', logo: '/demo-1.svg' }}
        awayTeam={{ name: '정규화', logo: '/demo-2.svg' }}
        homeScore={3}
        awayScore={1}
        matchTime="72'"
        scorer="지민"
      />
    </div>
  )
}
