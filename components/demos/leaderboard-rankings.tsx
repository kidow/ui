'use client'

import { LeaderboardRankings } from '@/components/kidow/leaderboard-rankings'

export default function LeaderboardRankingsDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <LeaderboardRankings rankings={[{ userId: '수집', userName: '수집', rank: 1, value: 1 }, { userId: '정규화', userName: '정규화', rank: 2, value: 2 }, { userId: '출처', userName: '출처', rank: 3, value: 3 }]} />
    </div>
  )
}
