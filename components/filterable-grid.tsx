'use client'

import { type ReactNode, useMemo, useState } from 'react'
import { LayoutGrid, Rows3, Search, X } from 'lucide-react'

export interface FilterableEntry {
  name: string
  title: string
  description: string
  source: string
  /** 서버에서 이미 그린 카드. 클라이언트는 어느 것을 내보낼지만 고른다. */
  card: ReactNode
}

/**
 * 목록을 이름·설명과 출처로 좁힌다.
 *
 * 카드를 클라이언트에서 다시 그리지 않고 서버가 그린 것을 노드째 받는다.
 * 283개짜리 카테고리를 클라이언트 컴포넌트로 바꾸면 초기 HTML 이 비어
 * 검색 엔진에 아무것도 남지 않는다. 필터를 걸지 않은 첫 화면은 전부
 * 서버 HTML 그대로다.
 */
export function FilterableGrid({
  entries,
  showSource = true,
}: {
  entries: FilterableEntry[]
  showSource?: boolean
}) {
  const [query, setQuery] = useState('')
  const [source, setSource] = useState('')
  const [sort, setSort] = useState('default')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const sources = useMemo(() => {
    const counts = new Map<string, number>()
    for (const entry of entries) {
      counts.set(entry.source, (counts.get(entry.source) ?? 0) + 1)
    }
    return [...counts.entries()].sort(([a, ac], [b, bc]) => bc - ac || a.localeCompare(b))
  }, [entries])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = entries.filter((entry) => {
      if (source && entry.source !== source) return false
      if (!q) return true
      return (
        entry.name.toLowerCase().includes(q) ||
        entry.title.toLowerCase().includes(q) ||
        entry.description.toLowerCase().includes(q)
      )
    })
    return sort === 'name' ? matches.toSorted((a, b) => a.title.localeCompare(b.title, 'ko')) : matches
  }, [entries, query, source, sort])

  const narrowed = Boolean(query.trim() || source)

  return (
    <div className="flex flex-col gap-4">
      <div className="catalog-toolbar">
        <div className="catalog-search-field flex h-9 min-w-40 flex-1 items-center gap-2 rounded-md border px-3 sm:max-w-xs">
          <Search className="text-muted-foreground size-4 shrink-0" />
          <input
            aria-label="현재 목록에서 검색"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="이름·설명으로 좁히기"
            className="w-full min-w-0 bg-transparent text-sm outline-none"
          />
        </div>

        {showSource && sources.length > 1 ? (
          // 네이티브 select 다. 39곳까지 가는 목록에 커스텀 팝오버를 얹을 이유가 없고,
          // 모바일에서는 OS 기본 피커가 더 낫다.
          <select
            aria-label="출처 필터"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            className="hover:bg-accent h-9 rounded-md border px-3 text-sm transition-colors"
          >
            <option value="">모든 출처 ({entries.length})</option>
            {sources.map(([name, count]) => (
              <option key={name} value={name}>
                {name} ({count})
              </option>
            ))}
          </select>
        ) : null}

        {narrowed ? (
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setSource('')
            }}
            className="text-muted-foreground hover:text-foreground flex h-9 items-center gap-1 rounded-md border px-3 text-sm transition-colors"
          >
            <X className="size-3.5" />
            초기화
          </button>
        ) : null}

        <span className="text-muted-foreground text-xs tabular-nums" aria-live="polite">{filtered.length}개</span>
        <div className="ml-auto flex items-center gap-2">
          <select aria-label="정렬 기준" value={sort} onChange={(event) => setSort(event.target.value)} className="catalog-sort">
            <option value="default">기본 순서</option>
            <option value="name">이름순</option>
          </select>
          <div className="catalog-view-switch" role="group" aria-label="보기 방식">
            <button type="button" aria-label="그리드 보기" aria-pressed={view === 'grid'} onClick={() => setView('grid')}><LayoutGrid size={15} /></button>
            <button type="button" aria-label="목록 보기" aria-pressed={view === 'list'} onClick={() => setView('list')}><Rows3 size={15} /></button>
          </div>
        </div>
      </div>

      {filtered.length ? (
        <div className="catalog-grid" data-view={view}>
          {filtered.map((entry) => (
            <div key={entry.name} className="contents">
              {entry.card}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground py-12 text-center text-sm">
          조건에 맞는 컴포넌트가 없습니다.
        </p>
      )}
    </div>
  )
}
