import Link from 'next/link'

import { demos } from '@/components/demos'
import { Badge } from '@/components/ui/badge'
import { hasGlobalEffect } from '@/lib/demo-flags'
import type { RegistryItem } from '@/lib/registry'

export function ComponentCard({ item }: { item: RegistryItem }) {
  // 문서 전역에 손대는 데모는 목록에서 렌더하지 않는다.
  // 카드 하나가 페이지 전체의 커서를 숨기거나 스크롤을 가로챈다.
  const Demo = hasGlobalEffect(item.name) ? undefined : demos[item.name]

  return (
    // 카드 전체를 <Link>로 감싸지 않는다 — 데모 안에 <a>가 있는 경우
    // (dock, hero-video-dialog 등) 중첩 앵커가 되어 hydration이 깨진다.
    // 제목 링크를 카드 전체로 늘리고(after:inset-0), 프리뷰는 클릭을 막는다.
    <article className="group hover:border-foreground/20 relative flex flex-col overflow-hidden rounded-xl border transition-colors">
      <div className="bg-muted/40 pointer-events-none flex h-52 items-center justify-center overflow-hidden">
        {Demo ? (
          <div className="flex w-full origin-center scale-[0.6] items-center justify-center">
            <Demo />
          </div>
        ) : (
          <span className="text-muted-foreground px-4 text-center text-xs">
            {hasGlobalEffect(item.name)
              ? '페이지 전체에 적용되는 효과입니다. 상세에서 확인하세요.'
              : '데모 없음'}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 border-t px-4 py-3">
        <Link
          href={`/c/${item.name}`}
          className="text-sm font-medium after:absolute after:inset-0"
        >
          {item.title}
        </Link>
        <div className="ml-auto flex items-center gap-1.5">
          <Badge variant="secondary">{item.meta.source}</Badge>
          <Badge variant="outline">{item.meta.license}</Badge>
        </div>
      </div>
    </article>
  )
}
