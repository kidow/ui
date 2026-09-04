/**
 * 출처 이름 → URL slug.
 *
 * registry.ts 가 아니라 여기 있는 이유: registry.ts 는 node:fs 를 읽어
 * 클라이언트에서 import 할 수 없다. 카드는 클라이언트에서도 그려지므로
 * 노드 의존이 없는 이 파일만 가져간다.
 *
 * 카테고리와 달리 표를 두지 않는다. 출처는 수집할 때마다 늘어나므로
 * 이름에서 바로 만든다. 39곳 기준 충돌 없음 — 새 출처가 기존 slug 와
 * 겹치면 sourceFromSlug 가 먼저 등록된 쪽을 돌려주니 그때 표로 바꾼다.
 */
export function sourceSlug(source: string) {
  return source
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
