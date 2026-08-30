'use client'

import NotificationCard from '@/components/kidow/notification-card'

export default function NotificationCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <NotificationCard
        title="새 컴포넌트"
        message="marquee 가 레지스트리에 추가됐습니다."
        userInfo={{ name: '지민', title: '메인테이너', avatar: '/demo-1.svg' }}
        RosettaLogo={() => <span className="text-xs font-bold">UI</span>}
      />
    </div>
  )
}
