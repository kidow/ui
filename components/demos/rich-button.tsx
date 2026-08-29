import { RichButton } from '@/components/kidow/rich-button'

export default function RichButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <RichButton>기본</RichButton>
      <RichButton color="blue">파랑</RichButton>
      <RichButton color="emerald">초록</RichButton>
    </div>
  )
}
