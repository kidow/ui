'use client'

import { Home, Search, Settings } from 'lucide-react'

import GlassDock from '@/components/kidow/glass-dock'

export default function GlassDockDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden">
      <GlassDock items={[{ title: 'Home', icon: Home }, { title: 'Search', icon: Search }, { title: 'Settings', icon: Settings }]} />
    </div>
  )
}
