'use client'

import TerminalCard from '@/components/kidow/terminal-card'

export default function TerminalCardDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-2">
      <TerminalCard command="수집" />
    </div>
  )
}
