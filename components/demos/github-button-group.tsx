'use client'

import { GitHubButtonGroup } from '@/components/kidow/github-button-group/github-button-group'

export default function GithubButtonGroupDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <GitHubButtonGroup owner="수집" repo="수집" />
    </div>
  )
}
