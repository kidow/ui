import { MasonryGrid } from '@/components/kidow/masonry-grid/masonry-grid'

const items = [
  { title: '수집', text: '문서 URL 하나로 시작합니다.' },
  { title: '정규화', text: 'import와 색 토큰만 우리 기준으로 맞춥니다. 나머지는 원본 그대로 둡니다.' },
  { title: '출처', text: '저자와 라이선스를 함께 기록합니다.' },
  { title: '검증', text: '빌드와 브라우저 프리뷰를 통과해야 커밋합니다.' },
]

export default function MasonryGridDemo() {
  return <MasonryGrid items={items} className="w-full max-w-md" />
}
