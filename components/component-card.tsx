import Link from 'next/link'

import { demos } from '@/components/demos'
import { LazyDemo } from '@/components/lazy-demo'
import { hasGlobalEffect, isSupportItem } from '@/lib/demo-flags'
import type { RegistryItem } from '@/lib/registry'
import { sourceSlug } from '@/lib/source'

export function ComponentCard({ item }: { item: RegistryItem }) {
  // 문서 전역에 손대는 데모는 목록에서 렌더하지 않는다.
  // 카드 하나가 페이지 전체의 커서를 숨기거나 스크롤을 가로챈다.
  const skipped = hasGlobalEffect(item.name)
  const hasDemo = !skipped && Boolean(demos[item.name])
  const support = !hasDemo && !skipped && isSupportItem(item.name, item.description)

  return (
    // 카드 전체를 <Link>로 감싸지 않는다 — 데모 안에 <a>가 있는 경우
    // (dock, hero-video-dialog 등) 중첩 앵커가 되어 hydration이 깨진다.
    // 제목 링크를 카드 전체로 늘리고(after:inset-0), 프리뷰는 클릭을 막는다.
    <article className="catalog-card group">
      <div className="catalog-card-preview pointer-events-none" inert>
        {hasDemo ? (
          <LazyDemo name={item.name} />
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
      <div className="catalog-card-info">
        <Link
          href={`/c/${item.name}`}
          className="catalog-card-title after:absolute after:inset-0"
        >
          {item.title}
        </Link>
        <div className="catalog-card-meta">
          {/* 제목 링크가 카드 전체를 덮으므로(after:inset-0) 출처는 그 위로 올린다. */}
          <Link href={`/source/${sourceSlug(item.meta.source)}`} className="relative z-10">
            <span className="catalog-card-source">{item.meta.source}</span>
          </Link>
          <span className="catalog-card-license">{item.meta.license}</span>
        </div>
      </div>
    </article>
  )
}
