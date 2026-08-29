import { Marquee } from '@/components/kidow/marquee'

const reviews = [
  { name: '지민', body: '설치 한 줄로 끝났다. 출처까지 적혀 있어서 마음이 편함.' },
  { name: 'Alex', body: 'Exactly the component I needed. Zero config.' },
  { name: '현우', body: '프레임워크 옮겨다니며 찾던 걸 한 곳에서 해결.' },
  { name: 'Yuki', body: 'コピペせずに済むのが最高。' },
]

export default function MarqueeDemo() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <figure
            key={review.name}
            className="bg-card w-56 shrink-0 rounded-xl border p-4"
          >
            <figcaption className="text-sm font-medium">{review.name}</figcaption>
            <blockquote className="text-muted-foreground mt-2 text-xs">
              {review.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l" />
    </div>
  )
}
