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
        <h1 className="font-heading text-3xl font-semibold tracking-tight">
          컴포넌트 {total.toLocaleString()}개를 한 곳에서 찾습니다
        </h1>
        <p className="text-muted-foreground text-sm">
          shadcn 호환 레지스트리 {sources}곳을 모았습니다. 출처와 라이선스를 함께 표기합니다.
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          go(query)
        }}
        className="focus-within:border-foreground/30 flex h-12 items-center gap-3 rounded-xl border px-4 transition-colors"
      >
        <Search className="text-muted-foreground size-4 shrink-0" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="찾는 컴포넌트를 적어 보세요 — marquee, 배경, 로딩 …"
          className="w-full min-w-0 bg-transparent text-sm outline-none"
        />
        <kbd className="bg-muted hidden shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </form>

      <div className="flex flex-wrap items-center gap-2">
        {SAMPLE_QUERIES.map((sample) => (
          <button
            key={sample}
            type="button"
            onClick={() => go(sample)}
            className="text-muted-foreground hover:text-foreground hover:border-foreground/20 rounded-md border px-3 py-1.5 text-xs transition-colors"
          >
            {sample}
          </button>
        ))}
      </div>
    </section>
  )
}
