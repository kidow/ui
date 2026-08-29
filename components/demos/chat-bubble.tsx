import { ChatThread } from '@/components/kidow/chat-bubble/chat-bubble'

const messages = [
  { text: '이 컴포넌트 어디서 가져왔어요?' },
  { text: 'jal-co/ui 입니다. 출처는 상세 페이지에 적혀 있어요.', sent: true },
]

export default function ChatBubbleDemo() {
  return <ChatThread messages={messages} className="w-72" />
}
