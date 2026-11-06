'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

import { SAMPLE_QUERIES } from '@/lib/search'

/**
 * 홈 첫 화면의 검색 진입.
 *
 * ⌘K 팔레트는 단축키를 아는 사람만 쓴다. 링크를 받고 처음 들어온 사람에게는
 * 눌러서 칠 곳이 보여야 한다. 결과는 주소가 있는 /search 로 보낸다.
 */
export function HomeSearch({ total, sources }: { total: number; sources: number }) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const go = (next: string) => {
    const q = next.trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          다음 아이디어를 위한 컴포넌트
        </h1>
        <p className="text-muted-foreground text-sm">
          {sources}곳에서 모은 {total.toLocaleString()}개의 컴포넌트. 미리 보고, 프로젝트에 가져가세요.
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          go(query)
        }}
        className="catalog-search-field flex h-11 max-w-2xl items-center gap-3 rounded-lg border px-3.5 transition-colors"
      >
        <Search className="text-muted-foreground size-4 shrink-0" />
        <input
          aria-label="전체 컴포넌트 검색"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="찾는 컴포넌트를 적어 보세요 — marquee, 배경, 로딩 …"
          className="w-full min-w-0 bg-transparent text-sm outline-none"
        />
        <button type="submit" className="catalog-search-submit">검색</button>
      </form>

      <div className="flex flex-wrap items-center gap-2">
        {SAMPLE_QUERIES.map((sample) => (
          <button
            key={sample}
            type="button"
            onClick={() => go(sample)}
            className="catalog-suggestion"
          >
            {sample}
          </button>
        ))}
      </div>
    </section>
  )
}
