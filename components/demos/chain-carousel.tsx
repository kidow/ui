'use client'

import { BadgeCheck, Boxes, Package, Search, Sparkles, Wand2 } from 'lucide-react'

import ChainCarousel from '@/components/kidow/chain-carousel'

/** 항목이 적으면 캐러셀이 같은 항목을 복제해 key 가 겹친다. 여섯 개를 넘긴다. */
const ITEMS = [
  { id: 'collect', name: '수집', icon: Boxes, details: '문서 URL' },
  { id: 'normalize', name: '정규화', icon: Wand2, details: 'import·토큰' },
  { id: 'source', name: '출처', icon: BadgeCheck, details: '라이선스' },
  { id: 'search', name: '검색', icon: Search, details: 'MCP' },
  { id: 'install', name: '설치', icon: Package, details: 'shadcn add' },
  { id: 'ship', name: '배포', icon: Sparkles, details: 'Vercel' },
]

export default function ChainCarouselDemo() {
  return (
    <div className="w-full p-4">
      <ChainCarousel items={ITEMS} />
    </div>
  )
}
