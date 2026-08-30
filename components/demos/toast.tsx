'use client'

import { ToastProvider } from '@/components/kidow/toast'

export default function ToastDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <ToastProvider>한 곳에 모은 컴포넌트</ToastProvider>
    </div>
  )
}
