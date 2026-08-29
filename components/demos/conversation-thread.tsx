'use client'

import {
  Conversation,
  ConversationContent,
} from '@/components/kidow/conversation-thread'
import { Message, MessageContent } from '@/components/kidow/voice-message'

export default function ConversationThreadDemo() {
  return (
    <div className="h-64 w-full max-w-md">
      <Conversation>
        <ConversationContent>
          <Message from="user">
            <MessageContent>마퀴 컴포넌트 찾아줘</MessageContent>
          </Message>
          <Message from="assistant">
            <MessageContent>@kidow/marquee 가 있습니다. 설치할까요?</MessageContent>
          </Message>
          <Message from="user">
            <MessageContent>응, 넣어줘</MessageContent>
          </Message>
        </ConversationContent>
      </Conversation>
    </div>
  )
}
