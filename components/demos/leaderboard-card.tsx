'use client'

import { LeaderboardCard } from '@/components/kidow/leaderboard-card'

export default function LeaderboardCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <LeaderboardCard fromDate="2026-08-01" toDate="2026-08-31" podiumRankings={[
          { userId: '1', userName: '지민', rank: 1, value: 1250 },
          { userId: '2', userName: 'Alex', rank: 2, value: 1100 },
          { userId: '3', userName: '수현', rank: 3, value: 940 },
        ]} rankings={[
          { userId: '1', userName: '지민', rank: 1, value: 1250, rankChange: 2 },
          { userId: '2', userName: 'Alex', rank: 2, value: 1100, rankChange: -1 },
          { userId: '3', userName: '수현', rank: 3, value: 940, rankChange: 0 },
        ]} />
    </div>
  )
}
