'use client'

import { Boxes, Search, Wand2 } from 'lucide-react'

import FlowerMenu from '@/components/kidow/flower-menu'

export default function FlowerMenuDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center overflow-hidden p-4">
      <FlowerMenu
        menuItems={[
          { icon: Boxes, label: '수집', href: '#' },
          { icon: Wand2, label: '정규화', href: '#' },
          { icon: Search, label: '검색', href: '#' },
        ]}
      />
    </div>
  )
}
