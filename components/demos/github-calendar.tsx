'use client'

import { GithubCalendar } from '@/components/kidow/github-calendar'

export default function GithubCalendarDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <GithubCalendar username="수집" />
    </div>
  )
}
