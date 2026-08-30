'use client'

import AnimatedBackground from '@/components/kidow/animated-background'

const TABS = ['수집', '정규화', '출처', '배포']

export default function AnimatedBackgroundDemo() {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <AnimatedBackground
        defaultValue="수집"
        className="bg-muted rounded-lg"
        enableHover
        transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            data-id={tab}
            type="button"
            className="text-muted-foreground data-[checked=true]:text-foreground px-4 py-2 text-sm"
          >
            {tab}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  )
}
