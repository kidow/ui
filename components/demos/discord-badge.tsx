'use client'

import { DiscordBadge } from '@/components/kidow/discord-badge/discord-badge'

export default function DiscordBadgeDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <DiscordBadge serverId="1088262076391718962" />
    </div>
  )
}
