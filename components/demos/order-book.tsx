'use client'

import { DefaultOrderBook } from '@/components/kidow/order-book/order-book'

export default function OrderBookDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <DefaultOrderBook />
    </div>
  )
}
