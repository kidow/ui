'use client'

import { TaskCheckbox } from '@/components/kidow/task-checkbox'

export default function TaskCheckboxDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TaskCheckbox label="레지스트리 등록" />
    </div>
  )
}
