import {
  Message,
  MessageAvatar,
  MessageContent,
} from '@/components/kidow/voice-message'

export default function VoiceMessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Message from="user">
        <MessageContent>이 레지스트리는 출처를 어떻게 표기하나요?</MessageContent>
        <MessageAvatar src="/demo-1.svg" name="나" />
      </Message>
      <Message from="assistant">
        <MessageAvatar src="/demo-2.svg" name="AI" />
        <MessageContent>각 컴포넌트 상세 페이지에 원저자와 라이선스를 적습니다.</MessageContent>
      </Message>
    </div>
  )
}
