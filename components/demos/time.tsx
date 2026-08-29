import { Time } from '@/components/kidow/time'

const date = new Date('2026-08-30T09:20:00')

export default function TimeDemo() {
  return (
    <div className="flex flex-col items-center gap-2 text-sm">
      <Time>{date}</Time>
      <Time formatStr="PPpp">{date}</Time>
      <Time formatStr="yyyy년 M월 d일">{date}</Time>
    </div>
  )
}
