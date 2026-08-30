'use client'

import {
  AnimatedSidebar,
  AnimatedSidebarProvider,
  AnimatedSidebarTrigger,
} from '@/components/kidow/animated-sidebar/components/motion/animated-sidebar'

export default function AnimatedSidebarDemo() {
  return (
    <AnimatedSidebarProvider>
      <div className="relative flex min-h-64 w-full items-center justify-center p-4">
        <AnimatedSidebarTrigger className="rounded-md border px-3 py-1.5 text-sm">
          사이드바 열기
        </AnimatedSidebarTrigger>
        <AnimatedSidebar>
          <nav className="flex flex-col gap-2 p-4 text-sm">
            <span>수집</span>
            <span>정규화</span>
            <span>출처</span>
          </nav>
        </AnimatedSidebar>
      </div>
    </AnimatedSidebarProvider>
  )
}
