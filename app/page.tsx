import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ComponentCard } from '@/components/component-card'

import { HomeSearch } from '@/components/home-search'
import { McpSetupSection } from '@/components/mcp-setup-section'
import { RelatedRegistriesSection } from '@/components/related-registries-section'
import { ShadcnBaseSection } from '@/components/shadcn-base-section'
import { SourcesSection } from '@/components/sources-section'
import { categorySlug, getItem, groupByCategory, items } from '@/lib/registry'

export default function Home() {
  // 스크롤이나 사용자 입력 없이도 보이는 데모 6개로 홈의 렌더 비용을 제한한다.
  const groups = groupByCategory().sort(([, a], [, b]) => b.length - a.length)
  const sources = new Set(items.map((item) => item.meta.source)).size
  const previews = ['animated-beam', 'globe', 'animated-list', 'marquee', 'border-beam', 'animated-gradient-text']
    .flatMap((name) => {
      const item = getItem(name)
      return item ? [item] : []
    })

  return (
    // 사람이 링크를 받고 들어오는 곳이다. 찾는 수단(검색·분류)이 먼저 오고
    // 에이전트 설정(MCP)은 그 아래에 둔다.
    <div className="flex flex-col gap-10">
      <HomeSearch total={items.length} sources={sources} />

      {previews.length > 0 && (
        <section aria-labelledby="preview-heading" className="flex flex-col gap-5">
          <div className="catalog-section-heading">
            <div className="flex items-center gap-2.5">
              <h2 id="preview-heading" className="text-sm font-semibold">컴포넌트 둘러보기</h2>
              <span className="catalog-count">{items.length.toLocaleString()}</span>
            </div>
            <Link href="#categories" className="catalog-text-link">카테고리로 찾기 <ArrowRight size={14} /></Link>
          </div>
          <div className="catalog-grid">{previews.map((item) => <ComponentCard key={item.name} item={item} />)}</div>
          <p className="text-muted-foreground text-xs">일부 컴포넌트의 미리보기입니다. 카테고리를 선택하면 전체 목록을 볼 수 있습니다.</p>
        </section>
      )}

      {items.length === 0 ? (
        <div className="flex min-h-60 flex-col items-center justify-center gap-3 rounded-xl border border-dashed text-center">
          <p className="font-heading text-lg font-semibold">아직 컴포넌트가 없습니다</p>
          <p className="text-muted-foreground max-w-md text-sm">
            Claude Code에 원본 문서 URL을 주면 <code className="font-mono">add-component</code>{' '}
            스킬이 원본 코드를 정규화해 레지스트리에 등록하고 출처를 함께 기록합니다.
          </p>
        </div>
      ) : (
        <section id="categories" className="flex scroll-mt-8 flex-col gap-4">
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
                className="catalog-category-card group flex items-center justify-between rounded-lg border px-4 py-3 transition-colors"
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

      <div id="sources" className="scroll-mt-8"><SourcesSection /></div>
      <McpSetupSection />
      <ShadcnBaseSection />
      <RelatedRegistriesSection />
    </div>
  )
}
