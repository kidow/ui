import { Stepper, StepperItem } from '@/components/kidow/stepper/stepper'

export default function StepperDemo() {
  return (
    <Stepper className="w-full max-w-sm">
      <StepperItem title="레지스트리 등록">components.json 에 추가됩니다.</StepperItem>
      <StepperItem title="MCP 연결">shadcn CLI 내장 서버를 씁니다.</StepperItem>
      <StepperItem title="에이전트 규칙">AGENTS.md 에 넣습니다.</StepperItem>
    </Stepper>
  )
}
