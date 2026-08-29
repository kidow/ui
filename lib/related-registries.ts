/**
 * 여기에 담지 않지만 알아둘 만한 레지스트리.
 *
 * 이 사이트는 React + Tailwind로 브라우저에서 렌더되는 컴포넌트만 담는다.
 * 그 기준에 걸리는 곳들은 복제하지 않고 링크로 안내한다.
 */
export interface RelatedRegistry {
  name: string
  url: string
  /** 무엇을 다루는 곳인가 */
  summary: string
  /** 왜 여기에 없는가 */
  reason: string
}

export const RELATED_REGISTRIES: RelatedRegistry[] = [
  {
    name: 'termcn',
    url: 'https://www.termcn.dev/docs/components',
    summary: 'CLI 앱을 위한 터미널 UI 컴포넌트. Ink와 OpenTUI 렌더러용 121종.',
    reason:
      '브라우저가 아니라 터미널에서 렌더된다. 이 사이트의 프리뷰로 검증할 수 없어 담지 않는다.',
  },
]
