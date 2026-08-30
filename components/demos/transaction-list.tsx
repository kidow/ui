'use client'

import TransactionList from '@/components/kidow/transaction-list'

export default function TransactionListDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <TransactionList
        transactions={[
          { id: '1', name: '커피', type: '지출', amount: -4500, date: '2026-08-30', time: '09:12', icon: <span>☕</span>, paymentMethod: '카드', cardLastFour: '4242' },
          { id: '2', name: '급여', type: '수입', amount: 3200000, date: '2026-08-25', time: '10:00', icon: <span>💰</span>, paymentMethod: '이체', cardLastFour: '1234' },
        ]}
      />
    </div>
  )
}
