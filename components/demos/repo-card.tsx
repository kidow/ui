'use client'

import { RepoCard } from '@/components/kidow/repo-card/repo-card'

export default function RepoCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <RepoCard owner="수집" repo="수집" />
    </div>
  )
}
