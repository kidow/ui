'use client'

import ReminderScheduler from '@/components/kidow/reminder-scheduler'

export default function ReminderSchedulerDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <ReminderScheduler
        isRepeating
        toggleRepeating={() => {}}
        repeatInterval="주간"
        setRepeatInterval={() => {}}
        daysOfWeek={['월', '화', '수', '목', '금']}
      />
    </div>
  )
}
