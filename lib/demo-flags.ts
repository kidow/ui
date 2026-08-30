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

/**
 * 단독으로는 화면에 그릴 것이 없는 항목.
 *
 * 훅·유틸·차트 부품처럼 다른 컴포넌트가 함께 설치해 쓰는 것들이다.
 * "데모 없음"으로 두면 만들다 만 것처럼 보이므로 따로 알린다.
 */
export function isSupportItem(name: string, description = '') {
  if (/^use-/.test(name)) return true
  if (/(-utils|-variants|split-text|set-stagger-direction|calculate-position|svg-path-to-vertices|demo-images|icons|weather-utils)$/.test(name))
    return true
  // 차트 부품 — 부모 차트 안에서만 의미가 있다
  if (/^(recharts-(chart|tooltip|legend|dot|brush|background)|chart-(kit|utils|context|animation|series|tooltip|stat-flow)|bklit-grid|x-axis|y-axis|background|legend|markers|reference-area|projection-line|profit-loss-line|pretext)$/.test(name))
    return true
  return /함께 설치된다|함께 쓴다|함께 설치한다/.test(description)
}
