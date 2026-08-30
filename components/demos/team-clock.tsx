'use client'

import TeamClock from '@/components/kidow/team-clock'

export default function TeamClockDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <TeamClock
        users={[
          { name: '지민', city: '서울', country: 'KR', timeDifference: '+0', pfp: '/demo-1.svg' },
          { name: 'Alex', city: 'Berlin', country: 'DE', timeDifference: '-8', pfp: '/demo-2.svg' },
        ]}
        clockSize={180}
        animationDuration={0.4}
        accentColor="#0894FF"
        backgroundColor="transparent"
        textColor="currentColor"
        borderColor="currentColor"
        hoverBackgroundColor="rgba(0,0,0,0.04)"
        showSeconds
        use24HourFormat
      />
    </div>
  )
}
