'use client'

import { ContributorGrid } from '@/components/kidow/contributor-grid/contributor-grid'

export default function ContributorGridDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ContributorGrid owner="수집" repo="수집" />
    </div>
  )
}
