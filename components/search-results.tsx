'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from 'lucide-react'

import { demos } from '@/components/demos'
import { LazyDemo } from '@/components/lazy-demo'
import { Badge } from '@/components/ui/badge'
import { hasGlobalEffect, isSupportItem } from '@/lib/demo-flags'
import { SAMPLE_QUERIES, type SearchEntry, searchEntries } from '@/lib/search'

/** 한 화면에 그리는 결과. 더 보기로 늘린다. */
const PAGE = 24

function ResultCard({ entry }: { entry: SearchEntry }) {
  const skipped = hasGlobalEffect(entry.name)
  const hasDemo = !skipped && Boolean(demos[entry.name])
  const support = !hasDemo && !skipped && isSupportItem(entry.name, entry.description)

  return (
    // component-card.tsx 와 같은 구조다. 저기는 서버 컴포넌트라 여기서 쓸 수 없어
    // 모양만 맞춰 다시 쓴다. 한쪽을 고치면 다른 쪽도 맞춘다.
    <article className="group hover:border-foreground/20 relative flex flex-col overflow-hidden rounded-xl border transition-colors">
      <div className="bg-muted/40 pointer-events-none flex h-52 items-center justify-center overflow-hidden">
        {hasDemo ? (
          <LazyDemo name={entry.name} />
        ) : (
          <span className="text-muted-foreground px-4 text-center text-xs">
            {skipped
              ? '페이지 전체에 적용되는 효과입니다. 상세에서 확인하세요.'
              : support
                ? '다른 컴포넌트가 함께 설치해 쓰는 부품입니다.'
                : '데모 없음'}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 border-t px-4 py-3">
        <Link
          href={`/c/${entry.name}`}
          className="min-w-0 truncate text-sm font-medium after:absolute after:inset-0"
        >
          {entry.title}
        </Link>
        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <Badge variant="secondary">{entry.source}</Badge>
          <Badge variant="outline">{entry.license}</Badge>
        </div>
      </div>
    </article>
  )
}

export function SearchResults() {
  const router = useRouter()
  const params = useSearchParams()
  const query = params.get('q') ?? ''

  const [draft, setDraft] = useState(query)
  const [entries, setEntries] = useState<SearchEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [shown, setShown] = useState(PAGE)

  // 뒤로 가기나 팔레트를 통한 이동으로 q 가 바뀌면 입력도 따라간다.
  useEffect(() => {
    setDraft(query)
    setShown(PAGE)
  }, [query])

  useEffect(() => {
    let cancelled = false
    fetch('/search-index')
      .then((response) => response.json())
      .then((data: SearchEntry[]) => {
        if (!cancelled) setEntries(data)
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const results = useMemo(() => searchEntries(entries, query), [entries, query])

  const submit = (next: string) => {
    const q = next.trim()
    // 주소를 바꿔야 결과를 링크로 넘길 수 있다. 검색이 이 페이지의 상태다.
    router.replace(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
  }

  return (
    <div className="flex flex-col gap-8">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          submit(draft)
        }}
        className="flex flex-col gap-3"
      >
        <h1 className="font-heading text-2xl font-semibold">검색</h1>
        <div className="focus-within:border-foreground/30 flex h-12 items-center gap-3 rounded-xl border px-4 transition-colors">
          <Search className="text-muted-foreground size-4 shrink-0" />
          <input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="marquee, 배경, 로딩, MagicUI …"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </form>

      {query ? (
        loading ? (
          <p className="text-muted-foreground text-sm">불러오는 중…</p>
        ) : results.length ? (
          <>
            <p className="text-muted-foreground text-sm">
              <span className="text-foreground font-medium">{query}</span> · {results.length}개
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.slice(0, shown).map((entry) => (
                <ResultCard key={entry.name} entry={entry} />
              ))}
            </div>
            {results.length > shown ? (
              <button
                type="button"
                onClick={() => setShown((prev) => prev + PAGE)}
                className="hover:bg-accent mx-auto rounded-md border px-4 py-2 text-sm transition-colors"
              >
                {results.length - shown}개 더 보기
              </button>
            ) : null}
          </>
        ) : (
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm">
              <span className="font-medium">{query}</span> 에 맞는 컴포넌트가 없습니다.
            </p>
            <p className="text-muted-foreground text-sm">
              이름·제목·설명·출처만 훑습니다. 쓰임새를 나타내는 말로 바꿔 보세요.
            </p>
            <SampleQueries onPick={submit} />
          </div>
        )
      ) : (
        <div className="flex flex-col items-start gap-3">
          <p className="text-muted-foreground text-sm">이렇게 찾아 보세요.</p>
          <SampleQueries onPick={submit} />
        </div>
      )}
    </div>
  )
}

function SampleQueries({ onPick }: { onPick: (query: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {SAMPLE_QUERIES.map((sample) => (
        <button
          key={sample}
          type="button"
          onClick={() => onPick(sample)}
          className="text-muted-foreground hover:text-foreground hover:border-foreground/20 rounded-md border px-3 py-1.5 text-xs transition-colors"
        >
          {sample}
        </button>
      ))}
    </div>
  )
}
