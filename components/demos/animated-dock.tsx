'use client'

import AnimatedDock from '@/components/kidow/animated-dock'

export default function AnimatedDockDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <AnimatedDock
        items={[
          { title: '수집', icon: <span>📦</span>, href: '#' },
          { title: '정규화', icon: <span>🪄</span>, href: '#' },
          { title: '출처', icon: <span>🔖</span>, href: '#' },
        ]}
      />
    </div>
  )
}
