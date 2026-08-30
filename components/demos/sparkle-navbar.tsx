'use client'

import SparkleNavbar from '@/components/kidow/sparkle-navbar'

export default function SparkleNavbarDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <SparkleNavbar items={['홈', '컴포넌트', '출처', '문서']} />
    </div>
  )
}
