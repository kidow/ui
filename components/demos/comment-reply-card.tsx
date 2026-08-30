'use client'

import CommentReplyCard from '@/components/kidow/comment-reply-card'

export default function CommentReplyCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <CommentReplyCard
        initialComments={[
          { id: 1, user: '지민', text: ['레지스트리 등록은 한 번만 하면 되나요?'], time: '2분 전', avatarColor: '#0894FF' },
          { id: 2, user: 'Alex', text: ['네, 프로젝트당 한 번입니다.'], time: '1분 전', avatarColor: '#C959DD' },
        ]}
      />
    </div>
  )
}
