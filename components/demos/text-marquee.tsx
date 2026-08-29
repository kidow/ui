import { TextMarquee } from '@/components/kidow/text-marquee'

export default function TextMarqueeDemo() {
  return (
    <div className="h-24 w-full overflow-hidden">
      <TextMarquee>
        {['수집', '정규화', '출처 표기', '설치'].map((word) => (
          <span key={word}>{word}</span>
        ))}
      </TextMarquee>
    </div>
  )
}
