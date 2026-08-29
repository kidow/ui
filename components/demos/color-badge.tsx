import { Badge } from '@/components/kidow/color-badge'

export default function ColorBadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>기본</Badge>
      <Badge variant="red">빨강</Badge>
      <Badge variant="blue">파랑</Badge>
      <Badge variant="green">초록</Badge>
    </div>
  )
}
