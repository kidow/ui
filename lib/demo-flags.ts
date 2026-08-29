/**
 * 목록 페이지에서 데모를 렌더하지 않을 컴포넌트.
 *
 * 페이지 전역에 부작용을 일으키는 것들이다. 카드 하나가 문서 전체의 커서를 숨기거나
 * 스크롤을 가로채면 목록 자체를 쓸 수 없게 된다. 상세 페이지에서는 그대로 보여준다 —
 * 거기는 그 컴포넌트를 보러 들어온 곳이라 전역 효과가 의도된 동작이다.
 */
export const GLOBAL_EFFECT_DEMOS: ReadonlySet<string> = new Set([
  // document.body.style.cursor = "none" 으로 문서 전체 커서를 숨긴다
  'smooth-cursor',
  // lenis 로 전역 스크롤을 가로챈다
  'sticky-scroll-cards',
  'scroll-tilted-grid',
  // position: fixed 에 z-index 9000 이상이라 목록 위를 덮는다
  'circular-navigation',
  'emoji-nav',
])

export function hasGlobalEffect(name: string) {
  return GLOBAL_EFFECT_DEMOS.has(name)
}
