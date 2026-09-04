import Link from 'next/link'

import { groupBySource, sourceSlug } from '@/lib/registry'

/**
 * 담은 곳 목록.
 *
 * 아래의 "여기에 없는 것"과 짝이다. 안 담은 이유는 적어 두면서 담은 곳은
 * 카드의 배지로만 닿을 수 있었다 — 어떤 컴포넌트가 그 출처인지 먼저 찾아야
 * 들어갈 수 있는 셈이라 목록을 따로 둔다.
 */
export function SourcesSection() {
  const sources = groupBySource()

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline gap-2">
        <h2 className="font-heading text-xl font-semibold">출처</h2>
        <span className="text-muted-foreground text-sm">{sources.length}곳</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {sources.map(([source, list]) => (
          <Link
            key={source}
            href={`/source/${sourceSlug(source)}`}
            className="hover:border-foreground/20 hover:text-foreground text-muted-foreground rounded-md border px-3 py-1.5 text-sm transition-colors"
          >
            {source} <span className="opacity-60">{list.length}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
