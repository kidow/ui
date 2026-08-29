'use client'

import { Kbd } from '@/components/kidow/keyboard-shortcut'

export default function KeyboardShortcutDemo() {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Kbd keys={['cmd', 'k']} />
      <span className="text-muted-foreground">검색 열기</span>
    </div>
  )
}
