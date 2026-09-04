'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Search } from 'lucide-react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { type SearchEntry, searchEntries } from '@/lib/search'

/** 결과가 1,500개까지 가면 팔레트가 버벅인다. 상위 40개만 그리고 나머지는 /search 로 넘긴다. */
const LIMIT = 40

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

  const all = useMemo(() => searchEntries(entries, query), [entries, query])
  const results = all.slice(0, LIMIT)

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
                <CommandGroup
                  heading={
                    all.length > results.length
                      ? `컴포넌트 ${all.length}개 중 ${results.length}개`
                      : `컴포넌트 ${all.length}개`
                  }
                >
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
              {all.length ? (
                <CommandGroup>
                  <CommandItem
                    value="__all__"
                    onSelect={() => go(`/search?q=${encodeURIComponent(query.trim())}`)}
                  >
                    <ArrowRight className="size-4" />
                    <span>결과 {all.length}개 전체 보기</span>
                    <span className="text-muted-foreground ml-auto text-xs">
                      주소로 공유할 수 있습니다
                    </span>
                  </CommandItem>
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
