import { OrbitCardStack } from '@/components/kidow/orbit-card-stack'

const items = [
  { name: '지민', role: '프론트엔드', description: '레지스트리에서 바로 설치', initials: 'JM', image: '/demo-1.svg' },
  { name: 'Alex', role: 'Design', description: '출처가 함께 표기됩니다', initials: 'AX', image: '/demo-2.svg' },
  { name: '현우', role: 'Product', description: '한 곳에서 훑어보기', initials: 'HW', image: '/demo-3.svg' },
]

export default function OrbitCardStackDemo() {
  return (
    <div className="h-64 w-full overflow-hidden">
      <OrbitCardStack items={items} />
    </div>
  )
}
