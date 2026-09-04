import { Suspense } from 'react'
import type { Metadata } from 'next'

import { SearchResults } from '@/components/search-results'
import { items } from '@/lib/registry'

export const metadata: Metadata = {
  title: '검색',
  description: `컴포넌트 ${items.length}개를 이름·설명·출처로 검색합니다.`,
}

export default function SearchPage() {
  // useSearchParams 를 쓰는 클라이언트 컴포넌트라 경계가 필요하다.
  // 껍데기는 정적으로 나가고 q 는 브라우저에서 읽는다.
  return (
    <Suspense fallback={null}>
      <SearchResults />
    </Suspense>
  )
}
