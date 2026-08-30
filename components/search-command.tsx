'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

interface SearchEntry {
  name: string
  title: string
  description: string
  category: string
  slug: string
  source: string
}

/** 결과가 617개까지 가면 팔레트가 버벅인다. 상위 40개만 그린다. */
const LIMIT = 40

/**
 * 이름·제목·설명·출처·카테고리를 한 번에 훑는다.
 * cmdk 기본 필터는 value 문자열 하나만 보므로 직접 점수를 매기고
 * shouldFilter={false} 로 넘긴다.
 */
function score(entry: SearchEntry, query: string) {
  const q = query.toLowerCase()
  if (entry.name.toLowerCase() === q || entry.title.toLowerCase() === q) return 0
  if (entry.name.toLowerCase().startsWith(q)) return 1
  if (entry.title.toLowerCase().startsWith(q)) return 2
  if (entry.name.toLowerCase().includes(q)) return 3
  if (entry.title.toLowerCase().includes(q)) return 4
  if (entry.description.toLowerCase().includes(q)) return 5
  if (entry.category.includes(q) || entry.source.toLowerCase().includes(q))
    return 6
  return -1
}

export function SearchCommand({
  categories,
}: {
  categories: { label: string; slug: string; count: number }[]
}) {
  const router = useRouter()
  const total = categories.reduce((sum, category) => sum + category.count, 0)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [entries, setEntries] = useState<SearchEntry[]>([])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  // 색인은 팔레트를 처음 열 때 한 번만 받는다.
  useEffect(() => {
    if (!open || entries.length) return
    let cancelled = false
    fetch('/search-index')
      .then((response) => response.json())
      .then((data: SearchEntry[]) => {
        if (!cancelled) setEntries(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [open, entries.length])

  const results = useMemo(() => {
    const q = query.trim()
    if (!q) return []
    return entries
      .map((entry) => ({ entry, rank: score(entry, q) }))
      .filter(({ rank }) => rank >= 0)
      .sort((a, b) => a.rank - b.rank || a.entry.name.localeCompare(b.entry.name))
      .slice(0, LIMIT)
      .map(({ entry }) => entry)
  }, [entries, query])

  const go = (href: string) => {
    setOpen(false)
    setQuery('')
    router.push(href)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:bg-accent hover:text-foreground flex h-9 items-center gap-2 rounded-md border px-3 text-sm transition-colors"
      >
        <Search className="size-4" />
        <span className="hidden sm:inline">컴포넌트 검색</span>
        <kbd className="bg-muted ml-1 hidden rounded px-1.5 py-0.5 font-mono text-[10px] sm:inline">
          ⌘K
        </kbd>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="컴포넌트 검색"
        description={`이름·설명·출처로 ${total}개를 검색합니다.`}
      >
        {/* CommandDialog 는 Command 를 감싸주지 않는다 — 직접 씌운다. */}
        <Command shouldFilter={false}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="marquee, 배경, 로딩, MagicUI …"
        />
        <CommandList>
          {query.trim() ? (
            <>
              <CommandEmpty>결과가 없습니다.</CommandEmpty>
              {results.length ? (
                <CommandGroup heading={`컴포넌트 ${results.length}개`}>
                  {results.map((entry) => (
                    <CommandItem
                      key={entry.name}
                      value={entry.name}
                      onSelect={() => go(`/c/${entry.name}`)}
                      className="flex-col items-start gap-0.5"
                    >
                      <div className="flex w-full items-center gap-2">
                        <span className="font-medium">{entry.title}</span>
                        <span className="text-muted-foreground font-mono text-xs">
                          {entry.name}
                        </span>
                        <span className="text-muted-foreground ml-auto text-xs">
                          {entry.source}
                        </span>
                      </div>
                      <span className="text-muted-foreground line-clamp-1 text-xs">
                        {entry.description}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : null}
            </>
          ) : (
            <CommandGroup heading="카테고리">
              {categories.map((category) => (
                <CommandItem
                  key={category.slug}
                  value={category.slug}
                  onSelect={() => go(`/category/${category.slug}`)}
                >
                  <span>{category.label}</span>
                  <span className="text-muted-foreground ml-auto text-xs">
                    {category.count}개
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
