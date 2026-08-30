import { TextBlink } from '@/components/kidow/text-blink'

export default function TextBlinkDemo() {
  return (
    <div className="text-foreground flex min-h-32 w-full items-center justify-center p-4">
      <TextBlink className="h-10">불러오는 중</TextBlink>
    </div>
  )
}
