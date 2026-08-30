'use client'

import { GitHubStarsButton } from '@/components/kidow/github-stars-button/github-stars-button'

export default function GithubStarsButtonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <GitHubStarsButton owner="수집" repo="수집" />
    </div>
  )
}
