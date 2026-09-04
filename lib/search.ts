/**
 * 팔레트(⌘K)와 검색 결과 페이지가 함께 쓰는 채점 로직.
 *
 * 두 곳이 같은 순위를 내야 한다. 팔레트에서 본 맨 위 항목이
 * "전체 결과 보기"로 넘어갔을 때 다른 자리에 있으면 검색이 고장 난 것처럼 보인다.
 */
export interface SearchEntry {
  name: string
  title: string
  description: string
  category: string
  slug: string
  source: string
  license: string
}

/**
 * 이름·제목·설명·출처·카테고리를 한 번에 훑는다.
 * cmdk 기본 필터는 value 문자열 하나만 보므로 직접 점수를 매기고
 * shouldFilter={false} 로 넘긴다.
 *
 * 낮을수록 먼저. -1 은 탈락.
 */
export function score(entry: SearchEntry, query: string) {
  const q = query.toLowerCase()
  if (entry.name.toLowerCase() === q || entry.title.toLowerCase() === q) return 0
  if (entry.name.toLowerCase().startsWith(q)) return 1
  if (entry.title.toLowerCase().startsWith(q)) return 2
  if (entry.name.toLowerCase().includes(q)) return 3
  if (entry.title.toLowerCase().includes(q)) return 4
  if (entry.description.toLowerCase().includes(q)) return 5
  if (entry.category.includes(q) || entry.source.toLowerCase().includes(q)) return 6
  return -1
}

export function searchEntries(entries: SearchEntry[], query: string, limit?: number) {
  const q = query.trim()
  if (!q) return []
  const ranked = entries
    .map((entry) => ({ entry, rank: score(entry, q) }))
    .filter(({ rank }) => rank >= 0)
    .sort((a, b) => a.rank - b.rank || a.entry.name.localeCompare(b.entry.name))
    .map(({ entry }) => entry)
  return limit ? ranked.slice(0, limit) : ranked
}

/** 홈과 결과 페이지의 빈 화면에 놓는 예시. 실제로 결과가 나오는 말만 넣는다. */
export const SAMPLE_QUERIES = [
  '마퀴',
  '로딩',
  '배경',
  '커서',
  '칸반',
  '차트',
  '터미널',
  '드래그',
]
