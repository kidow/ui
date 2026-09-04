import { categorySlug, items } from '@/lib/registry'

/**
 * 검색 팔레트(⌘K)와 /search 결과 페이지가 함께 쓰는 슬림 색인.
 *
 * 전체를 레이아웃에서 내려보내면 모든 페이지의 RSC 페이로드에 실린다.
 * 검색을 처음 쓸 때 한 번만 받아가도록 정적 파일로 뽑는다.
 */
export const dynamic = 'force-static'

export function GET() {
  return Response.json(
    items.map((item) => {
      const category = item.categories?.[0] ?? '기타'
      return {
        name: item.name,
        title: item.title,
        description: item.description,
        category,
        slug: categorySlug(category),
        source: item.meta.source,
        license: item.meta.license,
      }
    })
  )
}
