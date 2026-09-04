import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { HomeSearch } from '@/components/home-search'
import { McpSetupSection } from '@/components/mcp-setup-section'
import { RelatedRegistriesSection } from '@/components/related-registries-section'
import { ShadcnBaseSection } from '@/components/shadcn-base-section'
import { SourcesSection } from '@/components/sources-section'
import { categorySlug, groupByCategory, items } from '@/lib/registry'

export default function Home() {
  // 홈에서는 데모를 렌더하지 않는다. 1,500개를 한 페이지에 그리면 HTML 이 8MB 를 넘는다.
  const groups = groupByCategory().sort(([, a], [, b]) => b.length - a.length)
  const sources = new Set(items.map((item) => item.meta.source)).size

  return (
    // 사람이 링크를 받고 들어오는 곳이다. 찾는 수단(검색·분류)이 먼저 오고
    // 에이전트 설정(MCP)은 그 아래에 둔다.
    <div className="flex flex-col gap-12">
      <HomeSearch total={items.length} sources={sources} />

      {items.length === 0 ? (
        <div className="flex min-h-60 flex-col items-center justify-center gap-3 rounded-xl border border-dashed text-center">
          <p className="font-heading text-lg font-semibold">아직 컴포넌트가 없습니다</p>
          <p className="text-muted-foreground max-w-md text-sm">
            Claude Code에 원본 문서 URL을 주면 <code className="font-mono">add-component</code>{' '}
            스킬이 원본 코드를 정규화해 레지스트리에 등록하고 출처를 함께 기록합니다.
          </p>
        </div>
      ) : (
        <section className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <h2 className="font-heading text-xl font-semibold">카테고리</h2>
            <span className="text-muted-foreground text-sm">
              {items.length}개 · {groups.length}개 분류
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map(([category, list]) => (
              <Link
                key={category}
                href={`/category/${categorySlug(category)}`}
                className="hover:border-foreground/20 group flex items-center justify-between rounded-xl border px-5 py-4 transition-colors"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">{category}</span>
                  <span className="text-muted-foreground text-xs">{list.length}개</span>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-foreground size-4 transition-colors" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <SourcesSection />
      <McpSetupSection />
      <ShadcnBaseSection />
      <RelatedRegistriesSection />
    </div>
  )
}
