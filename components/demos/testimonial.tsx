import { TestimonialCard } from '@/components/kidow/testimonial/testimonial'

export default function TestimonialDemo() {
  return (
    <TestimonialCard
      testimonial={{
        quote: '필요한 컴포넌트를 검색 한 번으로 찾았습니다.',
        author: '지민',
        role: '프론트엔드 개발자',
      }}
      className="w-72"
    />
  )
}
