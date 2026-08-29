import { Marquee } from '@/components/kidow/marquee-spell'

export default function MarqueeSpellDemo() {
  return (
    <Marquee>
      {['수집', '정규화', '출처', '설치', '검색'].map((word) => (
        <span key={word} className="mx-4 text-sm font-medium">
          {word}
        </span>
      ))}
    </Marquee>
  )
}
