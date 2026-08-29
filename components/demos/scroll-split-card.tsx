import { ScrollSplitCard } from '@/components/kidow/scroll-split-card'

const cards = [
  {
    title: '수집',
    description: '원본 문서에서 코드와 의존성을 가져옵니다.',
    bgColor: '#0f172a',
    textColor: '#f8fafc',
  },
  {
    title: '정규화',
    description: 'import와 토큰만 우리 기준으로 맞춥니다.',
    bgColor: '#1e293b',
    textColor: '#f8fafc',
  },
]

export default function ScrollSplitCardDemo() {
  return (
    <div className="h-64 w-full overflow-hidden rounded-lg">
      <ScrollSplitCard imageSrc="/demo-3.svg" cards={cards} />
    </div>
  )
}
