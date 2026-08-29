import { Response } from '@/components/kidow/ai-response'

const markdown = `### 설치 방법

1. 레지스트리를 등록합니다
2. \`npx shadcn@latest add @kidow/marquee\` 를 실행합니다

출처와 라이선스는 상세 페이지에 표기됩니다.`

export default function AiResponseDemo() {
  return (
    <div className="w-full max-w-md">
      <Response>{markdown}</Response>
    </div>
  )
}
