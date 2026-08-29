import { TestimonialMarquee } from '@/components/kidow/testimonial-marquee'

const items = [
  { name: '지민', username: '@jimin', text: '설치 한 줄로 끝났다.', avatar: '/demo-1.svg' },
  { name: 'Alex', username: '@alex', text: 'Exactly what I needed.', avatar: '/demo-2.svg' },
  { name: '현우', username: '@hyunwoo', text: '출처가 적혀 있어 마음이 편하다.', avatar: '/demo-3.svg' },
]

export default function TestimonialMarqueeDemo() {
  return <TestimonialMarquee items={items} />
}
